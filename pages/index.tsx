import { NextFunctionComponent, NextContext } from 'next'
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Api from '../API';

const SHOW = 'friends'

type Props = {

}

  const Home: NextFunctionComponent = () => (
    <Layout>
      <Counter />
    </Layout>
  )

Home.getInitialProps = async ({ pathname }: NextContext) => {
  Api.getList(SHOW)
    .then(res => console.log(res))
  return {}
}

export default Home;
