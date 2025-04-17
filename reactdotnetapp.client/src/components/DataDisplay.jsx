import React, { useState, useEffect } from 'react';
import './DataDisplay.css'; // We'll create this next

const DataDisplay = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/data');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="data-container">
            <h2>Data from API</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="data-grid">
                    {data.map(item => (
                        <div key={item.id} className="data-card">
                            <h3>{item.name}</h3>
                            <p>Value: {item.value}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DataDisplay;