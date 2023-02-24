import './main-news.css'
import NewsArticle from './news-article/news-article'

export default function MainNews() {


    return (
        <div className="main-news">
            <NewsArticle title = 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?' date='2024-02-30'></NewsArticle>
            <NewsArticle title='Kaip issirinkti biuro kede?' date='2022-13-32'>
            </NewsArticle>
        </div>
    )
}