import NewsArticle from "./NewsArticle/news-article"
import './secondary-news.css'

export default function SecondaryNews () {
    return(
        <div className="secondary-news">
            <NewsArticle title='Kodel tinsta akiu vokai?' date='2023-10-25'></NewsArticle>
            <NewsArticle title='Kas juoksis paskutinis?' date='2021-11-25'></NewsArticle>
            <NewsArticle title='Kur yra singapuras?' date='2022-09-11'></NewsArticle>
            <NewsArticle title='Kaip atidaryti austres?' date='2023-45-1'></NewsArticle>
    </div>
    )
}