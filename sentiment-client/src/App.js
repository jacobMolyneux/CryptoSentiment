import {Homepage} from './pages/homepage'
import {Routes, Route} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import {LogInPage} from './pages/LogInPage'
import {SignUpPage} from './pages/signUpPage'
function App() {
  return (
    <div className="bg-dark" style={{height: '1000px'}}>
      <Nav>
        <Nav.Item>
          <Nav.Link to = '/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to = '/sign-up'>Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to = '/log-in'>Log In</Nav.Link>
        </Nav.Item>
      </Nav>
     
     <Routes>
       <Route path = '/' element ={<Homepage/>}/>
       <Route path ='/sign-up' element = {<SignUpPage/>}/>
       <Route path ='/log-in' element = {<LogInPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
