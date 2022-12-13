import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './layout';
import { AddPost } from './pages/AddPost';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Register } from './pages/Register';
import { Single } from './pages/Single';
import { fetchAuthMe } from './redux/slices/auth/asyncAuth';
import { authSelector } from './redux/slices/auth/selector';
import { useAppDispatch } from './redux/store';

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { auth } = useSelector(authSelector);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/posts/:id" element={<Single />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
