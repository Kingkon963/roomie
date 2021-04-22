import { GetStaticProps } from 'next';

// eslint-disable-next-line import/no-unresolved
import Layout from '../components/layout';
// eslint-disable-next-line import/no-unresolved
import LeftPanel from '../components/leftPanel';
// eslint-disable-next-line import/no-unresolved
import RightPanel from '../components/rightPanel';
// eslint-disable-next-line import/no-unresolved
import { CategoryProvider } from '../context/CategoryContext';

import getCategories from '../data/categories';

const Index = ({ categories }: {categories: {id: number, name: string}[]}) => (
  <Layout title="Home">
    <section className="section main-section">
      <div className="container is-fluid">
        <CategoryProvider>
          <div className="columns">
            <div className="column has-text-centered">
              <LeftPanel categories={categories} />
            </div>

            <div className="column has-text-centered is-half">
              <h1>Middle</h1>
            </div>

            <div className="column has-text-centered">
              <RightPanel />
            </div>
          </div>
        </CategoryProvider>
      </div>
    </section>

    <style jsx>
      {`
        .main-section {
          min-height: 100vh;
        }
      `}
    </style>
  </Layout>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const categories = getCategories();
  return {
    props: {
      categories,
    },
  };
};
