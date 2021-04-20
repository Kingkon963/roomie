// eslint-disable-next-line import/no-unresolved
import Layout from '../components/layout';
// eslint-disable-next-line import/no-unresolved
import LeftPanel from '../components/leftPanel';
// eslint-disable-next-line import/no-unresolved
import RightPanel from '../components/rightPanel';

const Index = () => (
  <Layout title="Home">
    <section className="section main-section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column has-text-centered">
            <LeftPanel />
          </div>

          <div className="column has-text-centered is-half">
            <h1>Middle</h1>
          </div>

          <div className="column has-text-centered">
            <RightPanel />
          </div>
        </div>
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
