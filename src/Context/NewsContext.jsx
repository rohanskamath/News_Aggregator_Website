/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [newsData, setNewsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [dateRange, setDateRange] = useState({ from: '', to: '' });
    const [source, setSource] = useState('');
    const [author, setAuthor] = useState('');  // New state for author

    return (
        <NewsContext.Provider value={{ 
            newsData, 
            setNewsData, 
            searchTerm, 
            setSearchTerm, 
            category, 
            setCategory, 
            dateRange, 
            setDateRange, 
            source, 
            setSource, 
            author,       // New value for author
            setAuthor     // New setter for author
        }}>
            {children}
        </NewsContext.Provider>
    );
};
