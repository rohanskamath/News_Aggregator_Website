import { useContext, useState, useEffect } from "react";
import FilterNews from "./FilterNews";
import { NewsContext } from '../Context/NewsContext';

const Sidebar = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [sources, setSources] = useState([]);
    const [authors, setAuthors] = useState([]);
    const { setSearchTerm, setCategory, setDateRange, setSource, setAuthor } = useContext(NewsContext);

    useEffect(() => {
        if (selectedFilter === 'source' && sources.length === 0) {
            const fetchSources = async () => {
                try {
                    const response = await fetch('https://newsapi.org/v2/sources?apiKey=f463419c4e4c4ebd96549c95688e979b');
                    const data = await response.json();
                    if (data.sources) {
                        setSources(data.sources);
                    } else {
                        console.error('Invalid response format:', data);
                    }
                } catch (error) {
                    console.error('Error fetching sources:', error);
                }
            };
            fetchSources();
        }

        if (selectedFilter === 'author' && authors.length === 0) {
            const fetchAuthors = async () => {
                try {
                    const response = await fetch('https://newsapi.org/v2/everything?q=latest&apiKey=f463419c4e4c4ebd96549c95688e979b');
                    const data = await response.json();
                    if (data.articles && Array.isArray(data.articles)) {
                        const uniqueAuthors = [...new Set(data.articles.map(article => article.author).filter(author => author))];
                        setAuthors(uniqueAuthors);
                    } else {
                        console.error('Invalid response format:', data);
                    }
                } catch (error) {
                    console.error('Error fetching authors:', error);
                }
            };
            fetchAuthors();
        }
    }, [selectedFilter, sources, authors]);

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const handleCategorySelect = (category) => {
        setCategory(category);
        setSearchTerm('');
        setDateRange({ from: '', to: '' });
        setSource('');
        setAuthor('');
    };

    const handleSourceSelect = (source) => {
        setSource(source);
        setSearchTerm('');
        setDateRange({ from: '', to: '' });
        setCategory('');
        setAuthor('');
    };

    const handleAuthorSelect = (author) => {
        console.log(author)
        setAuthor(author);
        setSearchTerm('');
        setDateRange({ from: '', to: '' });
        setCategory('');
        setSource('');
    };

    const handleDateChange = (dates) => {
        setDateRange(dates);
        setCategory('');
        setSource('');
        setAuthor('');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCategory('');
        setDateRange({ from: '', to: '' });
        setSource('');
        setAuthor('');
    };

    return (
        <aside id="sidebar" className='sidebar'>
            <div className='sidebar-header position-relative'>
                <i className="bi bi-search position-absolute" style={{ right: '10px', top: "6px" }}></i>

                {/* Search Box */}
                <input
                    type="text"
                    placeholder="Search keyword..."
                    onChange={handleSearchChange}
                    className="form-control shadow-none mt-4"
                    style={{ paddingRight: '2rem', fontFamily: "Merriweather, sans-serif" }}
                />

                {/* Filter */}
                <h5 className="mt-5">Filter by</h5>
                <select
                    onChange={handleFilterChange}
                    className="form-select mt-2 shadow-none"
                    style={{ fontFamily: "Merriweather, sans-serif" }}
                >
                    <option value="">Select Option</option>
                    <option value="category">News Category</option>
                    <option value="pdata">Published Date</option>
                    <option value="source">News Source</option>
                    <option value="author">Authors</option>
                </select>
                {selectedFilter && (
                    <FilterNews 
                        value={selectedFilter} 
                        onCategorySelect={handleCategorySelect}
                        onDateChange={handleDateChange}
                        sources={sources}
                        authors={authors}
                        onSourceSelect={handleSourceSelect}
                        onAuthorSelect={handleAuthorSelect}
                    />
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
