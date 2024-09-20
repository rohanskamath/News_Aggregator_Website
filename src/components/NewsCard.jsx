/* eslint-disable react/prop-types */

const NewsCard = ({ article }) => {

    return (
        <div className="card mb-3" style={{ maxWidth: '100%', margin: '0 auto', fontFamily: "Merriweather, sans-serif" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={article.urlToImage || 'https://via.placeholder.com/150'}
                        className="img-fluid rounded-start"
                        alt={article.title}
                        style={{ height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body" style={{fontFamily: "Merriweather, sans-serif"}}>
                        <h5 className="card-title" style={{fontFamily: "Merriweather, sans-serif"}}>{article.title}</h5>
                        <p className="card-text" style={{fontFamily: "Merriweather, sans-serif"}}>{article.description}</p>
                        <a href={article.url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
