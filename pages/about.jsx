import Layout from '../layouts/default';

const aboutPage = () => (
  <Layout title="About" class="container">
    <main>
      <h1 className="title">About Page of the Gitfolio</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc erat urna, dignissim vel imperdiet nec, lobortis ut neque.
        Sed ornare lacinia mauris eu tempor.
        In sollicitudin est nec sodales facilisis.
        Praesent posuere magna vitae nisi mattis, et pharetra nulla imperdiet.
        Sed lacus massa, feugiat in est vitae, varius luctus erat.
        Aenean eu lobortis metus, vitae maximus ipsum.
        Proin eget sagittis leo, a accumsan dolor.
      </p>
    </main>
    <style jsx>{`
    .container {
      min-height: 100vh;
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    main {
      padding: 5rem 2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title a {
      color: #0070f3;
      text-decoration: none;
    }

    .title a:hover,
    .title a:focus,
    .title a:active {
      text-decoration: underline;
    }

    .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
    }

    .title,
    .description {
      text-align: center;
    }

    .description {
      line-height: 1.5;
      font-size: 1.5rem;
    }
  `}</style>
  </Layout>
);

export default aboutPage;