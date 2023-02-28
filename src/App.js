import './App.css';
import MainContent from './components/MainPage/main-content.js';
import NewsMainContent from './components/NewsMainContent/NewsMainContent';
import Programs from './components/Programs/ProgramPage/Programs';
import { Route, Routes, Link } from 'react-router-dom';
import CounterPage from './counterPage/CounterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/contacts' element={<ShopsWrapper></ShopsWrapper>}></Route> */}
        <Route path='/' element={
          <ul>
            <li>
              <Link to ='/other-projects/counter'>Counter</Link>
            </li>
          </ul>
        }>

        </Route>
        <Route path='/codeacademy' element={<MainContent></MainContent>} ></Route>
        <Route path='/codeacademy/news' element={<NewsMainContent></NewsMainContent>} ></Route>
        <Route path='/codeacademy/programs' element={<Programs></Programs>} ></Route>
        <Route path='/other-projects/counter' element={<CounterPage></CounterPage>}> </Route>
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
