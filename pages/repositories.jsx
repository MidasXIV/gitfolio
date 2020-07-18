import Layout from '../layouts/default';

const Repositories = () => {
  return (
    <Layout title="Repositories" className="container">
      <main>
        <h1 className="title">Repositories</h1>
        <ul className="grid">
          <li className="card">Repository 1</li>
          <li className="card">Repository 2</li>
          <li className="card">Repository 3</li>
        </ul>
      </main>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        
      `}</style>
    </Layout>
  );
}

export default Repositories;