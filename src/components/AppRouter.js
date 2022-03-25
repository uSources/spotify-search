import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { Home } from './Home';
import { NotFoundPage } from './NotFoundPage';
import { RedirectPage } from './RedirectPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} exact={true} />
          <Route path='/redirect' element={<RedirectPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
