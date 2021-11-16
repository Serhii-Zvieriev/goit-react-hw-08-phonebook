import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { useEffect, lazy, Suspense } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { fetchContacts } from "./redux/contacts/contacts-operetions";
import Header from "./components/Header/Header";

import NotFoundView from "./pages/NotFoundView";

import style from "./App.module.css";

// const NotFoundView = lazy(() => import("./pages/NotFoundView"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={style.container}>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<div>Загрузка...</div>}>
            <h2>Phonebook</h2>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </Suspense>
        </Route>

        <Route path="/register" exact>
          <Suspense fallback={<div>Загрузка...</div>}>
            <RegisterPage />
          </Suspense>
        </Route>

        <Route path="/login" exact>
          <Suspense fallback={<div>Загрузка...</div>}>
            <LoginPage />
          </Suspense>
        </Route>

        <Route path="/contacts" exact>
          <Suspense fallback={<div>Загрузка...</div>}>
            <ContactsPage />
          </Suspense>
        </Route>

        <Route>
          <Suspense fallback={<div>Загрузка...</div>}>
            <NotFoundView />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
