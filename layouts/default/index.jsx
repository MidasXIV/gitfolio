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
      <div>

      </div>
      <div className="flex justify-end">
        <Link href="/"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">Home</a></Link>
        <Link href="/about"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">About</a></Link>
        <Link href="/repositories"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">Repositories</a></Link>
        <Link href="/blog"><a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">Blog</a></Link>
      </div>
    </header>

    {children}

    <footer className="min-w-full flex flex-col md:flex-row">
      <div className="py-4 border-b w-full md:w-3/4 md:border-r">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase font-mono font-semibold text-xs"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </div>
      <div className="md:w-1/4 py-4  w-full bg-gray-700">
        
      </div>
    </footer>
  </div >
);

export default Layout;

