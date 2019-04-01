import { NextFunctionComponent, NextContext } from 'next'
import Counter from '../components/Counter';
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

Home.getInitialProps = async ({ pathname }: NextContext) => {
  Api.getList(SHOW)
    .then(res => {})
  return {}
}

export default Home;
