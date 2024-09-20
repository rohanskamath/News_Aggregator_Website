import { useEffect, useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import NewsCard from '../components/NewsCard';

const Mainpage = () => {
    const { setNewsData, newsData, searchTerm, category, dateRange, source, author } = useContext(NewsContext);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f463419c4e4c4ebd96549c95688e979b';
                
                if (category) {
                    url = `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=f463419c4e4c4ebd96549c95688e979b`;
                } else if (searchTerm) {
                    url = `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&apiKey=f463419c4e4c4ebd96549c95688e979b`;
                }

                if (source) {
                    url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=f463419c4e4c4ebd96549c95688e979b`;
                }

                if (dateRange.from) {
                    url += `&from=${dateRange.from}`;
                }
                if (dateRange.to) {
                    url += `&to=${dateRange.to}`;
                }

                const response = await fetch(url);
                const data = await response.json();
                setNewsData(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [category, searchTerm, dateRange, source, author, setNewsData]);

    // Filter newsData based on author
    const filteredNews = (newsData).filter(article => 
        author ? article.author && article.author.toLowerCase() === author.toLowerCase() : true
    );

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>HeadLines</h1>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {filteredNews.length > 0 ? (
                        filteredNews.map((article, index) => (
                            <div className="col-12 mb-3" key={index}>
                                <NewsCard article={article} />
                            </div>
                        ))
                    ) : (
                        <p>No news articles available.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Mainpage;
