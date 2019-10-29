import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { store, persistor } from './redux/store';

import App from './App';

const httpLink = createHttpLink({
  uri : 'https://tranquil-bayou-42095.herokuapp.com/graphql' // development endpoint
  // uri : 'https://soc-2.herokuapp.com/graphql' // production endpoint
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

