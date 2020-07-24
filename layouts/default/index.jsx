import { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Header from "./header";
import Footer from "./footer";

// NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <Header />

        {children}

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
