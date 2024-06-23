import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from './redux/currency/operations';
import { setBaseCurrency } from './redux/currency/currencySlice';

const Home = lazy(() => import('pages/Home.jsx'));
const Rates = lazy(() => import('pages/Rates'));
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const succes = ({ coords }) => {
      dispatch(fetchBaseCurrency(coords));
    };

    const error = () => {
      dispatch(setBaseCurrency('USD'));
    };

    navigator.geolocation.getCurrentPosition(succes, error);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
