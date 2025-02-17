// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import './AdminPage.css'; // Import a CSS file for styling

// Define an interface for the quote object
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
    id: string;
    flag: number; // 0 for red, 1 for green
}

function AdminPage() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [flaggedRows, setFlaggedRows] = useState<Set<number>>(new Set<number>()); // Declare state for flaggedRows

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes`); // Change this line to use the correct URL
                const data = await response.json();
                setQuotes(data);

                // Ensure each quote has a valid id
                const initialFlaggedRows = new Set<number>(
                    data.map((quote: Quote, index: number) => quote.flag === 1 ? index : -1).filter((index: number) => index !== -1)
                );
                setFlaggedRows(initialFlaggedRows); // Set the state with initialFlaggedRows
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };

        fetchQuotes();
    }, []);

    const toggleFlag = async (index: number) => {
        const quote = quotes[index]; // Get the current quote
        if (!quote._id) {
            console.error('Quote ID is undefined:', quote);
            return; // Exit if the ID is undefined
        }
        const newFlagValue = quote.flag === 1 ? 0 : 1; // Toggle the flag value

        // Update the flag in the quotes array
        const updatedQuotes = [...quotes];
        updatedQuotes[index] = { ...quote, flag: newFlagValue }; // Update the flag value in the quote

        setQuotes(updatedQuotes); // Update the quotes state

        // Send the updated flag value to the backend
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/quotes/${quote._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ flag: newFlagValue }), // Send the new flag value
            });
        } catch (error) {
            console.error('Error updating flag:', error);
        }
    };

    const saveQuotes = async () => {
        try {
            await Promise.all(quotes.map(async (quote) => {
                console.log(`Updating Quote ID: ${quote.id} with Flag: ${quote.flag}`); // Debugging log
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes/${quote.id}`, { // Ensure the URL is correct
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ flag: quote.flag }), // Send the flag value
                });
                if (!response.ok) {
                    throw new Error(`Failed to update quote ID: ${quote.id}, Status: ${response.status}`);
                }
            }));
            console.log('All quotes updated successfully');
        } catch (error) {
            console.error('Error saving quotes:', error);
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
                        <tr key={index} className={flaggedRows.has(index) ? 'table-row-flagged' : ''}>
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
            <button onClick={saveQuotes} className="save-button">Save Changes</button>
        </div>
    );
}

export default AdminPage;
