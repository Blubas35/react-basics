import './App.css';
import MainContent from './components/MainPage/main-content.js';
import NewsMainContent from './components/NewsMainContent/NewsMainContent';
import Programs from './components/Programs/ProgramPage/Programs';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import CounterPage from './counterPage/CounterPage';
import CarForm from './carForm/CarFormPage';
import ShoppingList from './shoppingList/ShoppingList';
import ToDoList from './toDoList/to-do-list';
import StudentForm from './studentForm/StudentForm';
import MainNavigation from './components/MainNavigation/MainNavigation';
import ChuckNorrisPage from './ChuckNorrisPage/ChuckNorrisPage';
import RandomApi from './RandomApi/RandomApi';

function App() {
  return (
    <div className="App">
      <MainNavigation></MainNavigation>
      <Routes>

        <Route path='/codeacademy' element={<MainContent></MainContent>} ></Route>
        <Route path='/codeacademy/news' element={<NewsMainContent></NewsMainContent>} ></Route>
        <Route path='/codeacademy/programs' element={<Programs></Programs>} ></Route>
        <Route path='/other-projects/counter' element={<CounterPage></CounterPage>}> </Route>
        <Route path='/other-projects/CarFormPage' element={<CarForm></CarForm>}> </Route>
        <Route path='/other-projects/shopping-list' element={<ShoppingList></ShoppingList>}></Route>
        <Route path='/other-projects/to-do-list' element={<ToDoList></ToDoList>}></Route>
        <Route path='/other-projects/student-form' element={<StudentForm></StudentForm>}></Route>
        <Route path='/other-projects/chuck-norris-page' element={<ChuckNorrisPage></ChuckNorrisPage>}></Route>
        <Route path='/other-projects/bored-api' element={<RandomApi></RandomApi>}></Route>
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
