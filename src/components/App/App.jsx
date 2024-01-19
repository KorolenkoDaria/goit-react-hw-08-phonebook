import { Route, Routes } from "react-router-dom";

import { routes } from "routes";

import { Wrapper } from "./App.styled";

import Header from "components/Haeder/Header";
import Loader from "components/Loader/Loader";
import RestrictedRoute from "components/RestrictedRoute";
import PrivateRoute from "components/PrivateRoute";

import { refreshUser } from "../../redux/auth/authOperations";

import { useDispatch } from "react-redux";

import { Suspense, lazy, useEffect } from "react";

const HomePage = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() => import('../../pages/Registration/Register'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (

    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.HOME}>
            <Route index element={<HomePage />} />
            <Route path={routes.LOGIN} element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
            <Route path={routes.REGISTER} element={<RestrictedRoute><RegisterPage /></RestrictedRoute>} />
            <Route path={routes.CONTACTS} element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
          </Route>
        </Routes>
      </Suspense>
    </Wrapper>
  );

}
export default App;


