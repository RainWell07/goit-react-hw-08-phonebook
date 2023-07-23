import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import SharedLayout from "./SharedLayout/SharedLayout";
import {useAuth} from '../hooks/useAuth';
import { refreshUser } from "Redux/Authorization/ApiOperations";
import css from '../Modules/phoneBook.module.css';
import {Vortex} from "react-loader-spinner";
import NotFound from "./Navigation/NotFound";


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


export const App = () => {
  const {isRefreshing} = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b className={css.FetchLogo}><Vortex  height={400} width={400} color="#5a5aed"/></b>
  ) : (
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<RegisterPage />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}