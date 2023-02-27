import './App.css';
import MainContent from './components/MainPage/main-content.js';
import NewsMainContent from './components/NewsMainContent/NewsMainContent';
import Programs from './components/Programs/ProgramPage/Programs';
import { Route, Routes, Link } from 'react-router-dom';
import ShopsWrapper from './components/contacts/shops-wrapper/shops-wrapper';
import ContactsPage from './components/contacts/kontaktai';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/contacts' element={<ShopsWrapper></ShopsWrapper>}></Route> */}
        <Route path='/codeacademy' element={<MainContent></MainContent>} ></Route>
        <Route path='/codeacademy/news' element={<NewsMainContent></NewsMainContent>} ></Route>
        <Route path='/codeacademy/programs' element={<Programs></Programs>} ></Route>
        <Route path='*' element= {
        <div>
          <h1>404 error. Page not found</h1> 
          <Link to='/codeacademy'>Back to home page</Link>
          </div>
        } ></Route>
      </Routes>


      {/* <Header> </Header>
      <MainContent></MainContent>
      {/* <NewsMainContent></NewsMainContent> */}
      {/* <Programs></Programs> */}
      {/* <ContactsPage></ContactsPage> */}
    </div>
  );
}

export default App;
