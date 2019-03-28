import App, {Container} from 'next/app'
import * as React from 'react';
import '../styles/reset.scss';

export default class MyApp extends App{
  render() {
    const {props} = this as any;
    const {Component, pageProps} = props;
    return (
      <Container>
        <Component />
      </Container>
    )
  };
}


