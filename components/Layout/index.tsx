import * as React from 'react';
import Header from '../Header';
import { withRouter } from 'next/router';


type Props = {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
};

export default withRouter(Layout);