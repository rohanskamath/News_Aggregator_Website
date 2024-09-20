import PropTypes from 'prop-types';
import { useState } from 'react';

const FilterNews = ({ value, onCategorySelect, onDateChange, sources, onSourceSelect, authors, onAuthorSelect }) => {
    const categoryNames = [
        { categoryName: 'business', color: '#FCC1B0' },
        { categoryName: 'entertainment', color: '#B2D2E8' },
        { categoryName: 'health', color: '#F4D1A6' },
        { categoryName: 'science', color: '#C5AE88' },
        { categoryName: 'sports', color: '#C1E0C8' },
        { categoryName: 'technology', color: '#D7C2D7' },
    ];

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleDateChange = () => {
        if (onDateChange) {
            onDateChange({ from: fromDate, to: toDate });
        }
    };

    return (
        <>
            {value === 'category' && (
                <div className="mt-3">
                    <p>Categories</p>
                    {categoryNames.map((token, index) => (
                        <button
                            key={index}
                            className="btn btn-sm me-2 mb-2"
                            style={{ backgroundColor: token.color }}
                            onClick={() => onCategorySelect(token.categoryName)}
                        >
                            {token.categoryName.replace(/\b\w/g, (char) => char.toUpperCase())}

                        </button>
                    ))}
                </div>
            )}

            {value === 'pdata' && (
                <div className="mt-3">
                    <p>Published Date</p>
                    <input
                        type="date"
                        className="form-control mb-2"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="form-control mb-2"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                    <button
                        style={{backgroundColor:"#012790", color: "white"}}
                        className="btn"
                        onClick={handleDateChange}
                    >
                        Apply Date Filter
                    </button>
                </div>
            )}

            {value === 'source' && (
                <div className="mt-3">
                    <p>News Sources</p>
                    {sources.length > 0 ? (
                        sources.map((source, index) => (
                            <button
                                key={index}
                                style={{backgroundColor:"#012790", color: "white"}}
                                className="btn btn-sm me-2 mb-2"
                                onClick={() => onSourceSelect(source.id)}
                            >
                                {source.name}
                            </button>
                        ))
                    ) : (
                        <p>No sources available.</p>
                    )}
                </div>
            )}

            {value === 'author' && (
                <div className="mt-3">
                    <p>Authors</p>
                    {authors.length > 0 ? (
                        authors.map((author, index) => (
                            <button
                                key={index}
                                style={{backgroundColor:"#012790", color: "white"}}
                                className="btn btn-sm me-2 mb-2"
                                onClick={() => onAuthorSelect(author)}
                            >
                                {author}
                            </button>
                        ))
                    ) : (
                        <p>No authors available.</p>
                    )}
                </div>
            )}
        </>
    );
};

FilterNews.propTypes = {
    value: PropTypes.string.isRequired,
    onCategorySelect: PropTypes.func,
    onDateChange: PropTypes.func,
    sources: PropTypes.array,
    authors: PropTypes.array,
    onSourceSelect: PropTypes.func,
    onAuthorSelect: PropTypes.func,
};

export default FilterNews;
