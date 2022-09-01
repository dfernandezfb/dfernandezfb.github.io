import { HashRouter as Router, Switch, Route} from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import AboutMe from './pages/AboutMe'
import Education from './pages/Education'
import Menu from './components/Menu/Menu';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import LanguageProvider from './context/LanguageContext';

function App() {
  return (
      <Router>
        <LanguageProvider>
        <div className='main-container'>
        <Menu/>
        <Switch>
          <Route exact path='/' component={AboutMe}/>
          <Route exact path='/education' component={Education}/>
          <Route exact path='/experience' component={Experience}/>
          <Route exact path='/skills' component={Skills}/>
        </Switch>
        </div>
        </LanguageProvider>
      </Router>
  );
}

export default App;
