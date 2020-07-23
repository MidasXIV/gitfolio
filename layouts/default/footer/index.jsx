import React, { Component } from "react";
import styles from "../index.module.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={styles.footer}>
        <div className="bottom-0 min-w-full flex flex-col md:flex-row uppercase font-mono font-semibold text-xs">
          <div className="py-4 border-b w-full md:w-3/4 md:border-r">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.logo}
              />
            </a>
          </div>
          <div className="md:w-1/4 py-4 items-center w-full bg-gray-700">
            <a className="text-gray-400">Gitfolio Podcast</a>
          </div>
        </div>
      </div>
    );
  }
}
