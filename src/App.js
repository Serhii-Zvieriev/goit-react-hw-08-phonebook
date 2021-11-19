import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { useEffect, lazy, Suspense } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { fetchCurrentUser } from "./redux/auth/auth-operetions";
import { fetchContacts } from "./redux/contacts/contacts-operetions";
import {
  getIsLoggedIn,
  getToken,
  isFetchingCurrent,
} from "./redux/auth/auth-selectors";

import style from "./App.module.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundView = lazy(() => import("./pages/NotFoundView"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const dispatch = useDispatch();

  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetching = useSelector(isFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser(token));
  }, [dispatch, token]);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts(token));
  }, [dispatch, isLoggedIn, token]);

  return (
    !isFetching && (
      <div className={style.container}>
        <Header />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <PublicRoute>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <HomePage />
                </Suspense>
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/register"
            exact
            element={
              <PublicRoute restricted redirectTo={"/contacts"}>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <RegisterPage />
                </Suspense>
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/login"
            exact
            element={
              <PublicRoute restricted redirectTo={"/contacts"}>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <LoginPage />
                </Suspense>
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/logout"
            exact
            element={
              <PublicRoute restricted redirectTo={"/"}>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <div>Out</div>
                </Suspense>
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/contacts"
            exact
            element={
              <PrivateRoute>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <>
                    <h2>Phonebook</h2>
                    <ContactForm />
                    <h2>Contacts</h2>
                    <Filter />
                    <ContactList />
                  </>
                </Suspense>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <NotFoundView />
              </Suspense>
            }
          />
        </Routes>
      </div>
    )
  );
}

export default App;
