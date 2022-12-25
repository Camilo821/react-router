import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from './Menu';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';
import { LogoutPage } from './LogoutPage'
import { LoginPage } from './LoginPage'

function App() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} >
          <Route path=':slug' element={<BlogPost />} />
        </Route>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
