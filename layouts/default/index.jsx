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

    <header className="">
      <div className="">

      </div>
      <div className="flex justify-end">
        <Link href="/"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">Home</a></Link>
        <Link href="/about"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">About</a></Link>
        <Link href="/repositories"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">Repositories</a></Link>
        <Link href="/blog"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">Blog</a></Link>
      </div>
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
        color: #202121;
        border-bottom: 1px solid #eaeaea;
      }

      header a:hover,
      header a:focus,
      header a:active {
        font-weight: bold;
        // color: orange;
        text-decoration: underline;
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

