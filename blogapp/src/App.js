import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import {HomeComponent} from './Components/HomeComponent';
import {ArticlesComponent} from './Components/ArticlesComponent';
import {ContactComponent} from './Components/ContactComponent';
import {AboutComponent} from './Components/AboutComponent';
import {NavbarComponent} from './Components/NavbarComponent';
import {ArticleListComponent} from './Components/ArticleListComponent';
import {NotFoundComponent} from './Components/NotFoundComponent';
import {FooterComponent} from './Components/FooterComponent';




export function App() {

  return (
    <Router>

      <div className="">
        <NavbarComponent/>
        <div className='page-body'>
          <Routes>
              <Route path='/' exact element={<HomeComponent/>}/>
              <Route path='/about' element={<AboutComponent/>}/>
              <Route path='/contact' element={<ContactComponent/>}/>
              {/* URL parameter example "name" --> /article-list/learn-react */}
              <Route path='/articles-list/:name' element={<ArticlesComponent/>}/>
              <Route path='/articles-list' element={<ArticleListComponent/>}/>
             
              <Route path='*' element={<NotFoundComponent/>}/>
          </Routes>
        </div>
        <div>
          <FooterComponent/> 
        </div>
      </div>
 
    </Router>

  );
}

export default App;
