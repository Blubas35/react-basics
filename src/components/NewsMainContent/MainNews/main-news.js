import './main-news.css'
import NewsArticle from './news-article/news-article'

export default function MainNews(props) {
    const mainNewsInfo = props.info
    const newsArticleElements = mainNewsInfo.map((news, index) => <NewsArticle article={news} key={index} /> )

    return (
        <div className="main-news">
            {newsArticleElements}
            {/* <NewsArticle title = 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?' date='2024-02-30'></NewsArticle>
            <NewsArticle title='Kaip issirinkti biuro kede?' date='2022-13-32'>
            </NewsArticle> */}
        </div>
    )
}