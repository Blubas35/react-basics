import './news-article.css'

export default function NewsArticle (props) {
    
    let { image, category, title, date } = props.article
    
    if (!title) {
        return
    }
    return (
        <article className="news-article">
        <a href="./#">
            <div className="image-wrapper">
                <img
                    src={image} alt='news-photo'/>
            </div>

            <div className="info-wrapper">
                <span className="article-category">{category}</span>
                <h2 className="article-title">{title}</h2>
                <span className="article-date">{date}</span>
            </div>
        </a>
    </article>
    )
}