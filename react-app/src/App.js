import React from 'react';

import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Orders from './components/Orders';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import ClientsDetails from './components/ClientsDetails';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <ClientsDetails />
          <Orders />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
