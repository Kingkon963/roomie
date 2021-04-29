import { GetStaticProps } from 'next';

// eslint-disable-next-line import/no-unresolved
import Layout from '../components/layout';
// eslint-disable-next-line import/no-unresolved
import LeftPanel from '../components/leftPanel';
// eslint-disable-next-line import/no-unresolved
import RightPanel from '../components/rightPanel';
// eslint-disable-next-line import/no-unresolved
import { CategoryProvider } from '../context/CategoryContext';
// eslint-disable-next-line import/no-unresolved
import { PropertyProvider } from '../context/PropertyContext';
// eslint-disable-next-line import/no-unresolved
import { CartProvider } from '../context/CartContext';
// eslint-disable-next-line import/no-unresolved
import Category from '../interfaces/Category';

import getCategories from '../data/categories';

const Index = ({ categories }: {categories: Category[]}) => (
  <Layout title="Home">
    <section className="section main-section">
      <div className="container is-fluid">
        <CartProvider>
          <CategoryProvider>
            <PropertyProvider>
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
            </PropertyProvider>
          </CategoryProvider>
        </CartProvider>
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
