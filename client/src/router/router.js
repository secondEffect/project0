import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import { SignUpPage } from '../pages/SignUpPage';

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='asdfs' element={<Main />} />
          <Route path='/' element={<SignUpPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
