import NewsArticle from "./NewsArticle/news-article"
import './secondary-news.css'

export default function SecondaryNews(props) {
    const sideNews = props.info

    const sideNewsArticleElements = sideNews.map((news, index) => <NewsArticle news={news} key={index} />)

    return (
        <div className="secondary-news">
            {sideNewsArticleElements}
        </div>
    )
}