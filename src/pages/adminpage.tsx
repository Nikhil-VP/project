import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

interface Quote {
    _id: string;
    company: string;
    industry: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    requirements: string;
    timeline: string;
    flag: number;
}

function AdminPage() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');  // Check token immediately

    
    if (!token) {
        alert('Access denied!');
        navigate('/login');
        return null;  // ⬅ Prevents page from rendering
    }

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 401 || response.status === 403) {
                    alert('Unauthorized! Redirecting to login.');
                    localStorage.removeItem('token');
                    navigate('/login');
                    return;
                }

                const data = await response.json();
                setQuotes(data);
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };

        fetchQuotes();
    }, [navigate, token]); // ✅ Keep token in dependencies

    const toggleFlag = async (index: number) => {
        const quote = quotes[index];
        if (!quote._id) return;

        const newFlagValue = quote.flag === 1 ? 0 : 1;
        const updatedQuotes = [...quotes];
        updatedQuotes[index] = { ...quote, flag: newFlagValue };
        setQuotes(updatedQuotes);

        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/quotes/${quote._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ flag: newFlagValue }),
            });
        } catch (error) {
            console.error('Error updating flag:', error);
        }
    };

    return (
        <div className="admin-page">
            <h1>Welcome to the Admin Page</h1>
            <h2>All Quotation Requests</h2>
            <table className="quote-table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Industry</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Requirements</th>
                        <th>Timeline</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote, index) => (
                        <tr key={quote._id}>
                            <td>{quote.company}</td>
                            <td>{quote.industry}</td>
                            <td>{quote.name}</td>
                            <td>{quote.email}</td>
                            <td>{quote.phone}</td>
                            <td>{quote.location}</td>
                            <td>{quote.requirements}</td>
                            <td>{quote.timeline}</td>
                            <td>
                                <div 
                                    className={`checkmark ${quote.flag === 1 ? 'active' : ''}`} 
                                    onClick={() => toggleFlag(index)}
                                >
                                    ✔
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => { 
                localStorage.removeItem('token'); 
                navigate('/login'); 
            }} className="logout-button">
                Logout
            </button>
        </div>
    );
}

export default AdminPage;
