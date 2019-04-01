import { NextFunctionComponent, NextContext } from 'next'
import { Dispatch, connect, bindActionCreators } from 'react-redux';
import { State } from '../model/index';
import { ThunkDispatch } from "redux-thunk";
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Api from '../API';

const SHOW = 'friends'

type Props = {

}

const Home: NextFunctionComponent = () => (
  <Layout>
    <Loader />
  </Layout>
)

Home.getInitialProps = async ({ pathname, store }: NextContext) => {
  console.log(pathname);

  return {}
}

interface DispatchProps {
  getPosts: typeof Api.getList;
}

const mapStateToProps: Function = (state: State): {} => {
  const { posts, error } = state.posts
  return {
    posts,
    error
  };
};

const mapDispatchToProps: Function = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    getPosts: () => dispatch(Api.getList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
