import { Component } from "react";
import Link from "next/link";
import styles from "../index.module.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={styles.header}>
        <div className="min-w-full flex flex-col md:flex-row justify-between">
          <div>
            <h6 className="px-4 py-4 uppercase font-mono font-semibold text-xs border-b md:border-none">
              Gitfolio
            </h6>
          </div>
          <div className="flex justify-end">
            <Link href="/">
              <a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">
                About
              </a>
            </Link>
            <Link href="/repositories">
              <a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">
                Repositories
              </a>
            </Link>
            <Link href="/blog">
              <a className="px-4 py-4 uppercase font-mono font-semibold text-xs border-l">
                Blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
