import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { selectIsFetchCurrentUser } from 'redux/auth/auth-selectors';
import { refresh } from 'redux/auth/auth-operations';

import PrivateRoute from 'HOCs/PrivateRoute';
import PublicRoute from 'HOCs/PublicRoute';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(selectIsFetchCurrentUser);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {!isFetchCurrentUser && (
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/phonebook"
                element={
                  <PrivateRoute>
                    <PhonebookPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
