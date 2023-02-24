import './App.css';
import MainContent from './components/MainPage/main-content.js';
import NewsMainContent from './components/NewsMainContent/NewsMainContent';
import Programs from './components/Programs/ProgramPage/Programs';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/codeacademy' element={<MainContent></MainContent>} ></Route>
        <Route path='/codeacademy/news' element={<NewsMainContent></NewsMainContent>} ></Route>
        <Route path='/codeacademy/programs' element={<Programs></Programs>} ></Route>
        <Route path='*' element= {
        <div>
          <h1>404 error. Page not found</h1> 
          <Link to='/'>Back to home page</Link>
          </div>
        } ></Route>
      </Routes>


      {/* <Header> </Header>
      <MainContent></MainContent>
      {/* <NewsMainContent></NewsMainContent> */}
      {/* <Programs></Programs> */}
    </div>
  );
}

export default App;
