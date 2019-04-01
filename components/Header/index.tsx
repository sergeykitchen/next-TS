import * as React from 'react';
import LinkComponet from '../LinkCompponent';
import './index.scss';

const Header: React.FunctionComponent<{}> = () => (
  <header className="w-header">
    <nav className="b-nav">
      <LinkComponet href="/">
        <a className="b-nav_link">Home</a>
      </LinkComponet>
      <LinkComponet href="/secondPage">
        <a className="b-nav_link">Second page</a>
      </LinkComponet>
    </nav>
  </header>
);

export default Header;