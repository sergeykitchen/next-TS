import * as React from 'react';
import { Provider } from "react-redux";
import App, { Container } from 'next/app'
import withRedux from "next-redux-wrapper";
import createStore from "../redux/store";
import '../styles/reset.scss';

export default withRedux(createStore, { debug: true })(class MyApp extends App {
  render() {
    const { props } = this as any;
    const { Component, pageProps, store } = props;
    return (
      <Container>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    )
  };
});

