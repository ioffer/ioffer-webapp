import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient,createHttpLink,  ApolloProvider, InMemoryCache} from "@apollo/client";
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux'
import store from './redux/store'
import { setContext } from 'apollo-link-context';


const httpLink = createHttpLink({
  uri:'http://192.168.1.28:4000/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
