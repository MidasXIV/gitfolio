import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

// NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/repositories"><a>Repositories</a></Link>
    </header>

    {children}

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
    </footer>

    <style jsx>{`
      header {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #eaeaea;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      header a:hover,
      header a:focus,
      header a:active {
        font-weight: bold;
        color: orange;
      }

      footer {
        width: 100%;
        height: 50px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .logo {
        height: 1em;
      }
    `}</style>

  </div>
);

export default Layout;

