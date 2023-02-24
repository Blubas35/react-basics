import './news-article.css'

export default function NewsArticle (props) {
    if(!props.title) {
        return
    }
    
    return (
        <article className="news-article">
        <a href="#">
            <div className="image-wrapper">
                <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg"/>
            </div>

            <div className="info-wrapper">
                <span className="article-category">Naujienos</span>
                <h2 className="article-title">{props.title}</h2>

                <span className="article-date">{props.date}</span>
            </div>
        </a>
    </article>
    )
}