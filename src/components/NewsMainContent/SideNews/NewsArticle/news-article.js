import './news-article.css'

export default function NewsArticle(props) {
    let { image, category, title, date } = props.news

    if (!title) {
        return
    }

    return (
        <article className="news-article">
            <a href="./#">
                {image && <div className="image-wrapper">
                    <img src={image} alt={title} />
                </div>}

                <div className="info-wrapper">
                    {category && <span className="article-category">{category}</span>}
                    <h2 className="article-title">{title}</h2>

                    {date && <span className="article-date">{date}</span>}
                </div>
            </a>
        </article>
    )
}