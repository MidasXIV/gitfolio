import { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { userInfo } from "../../config/user.config";

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Head>
          <script defer src="/js/github-buttons.js" />
        </Head>
        <div className="px-4 py-4">
          <div className="sm:max-w-full md:max-w-xs max-w-sm flex flex-col sm:flex-row md:flex-col rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              className="rounded-lg"
              src={user.avatar_url}
              alt="User Github logo"
            />
            <div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl">{userInfo.name}</div>
                <p className="text-gray-700 text-base">{userInfo.role}</p>
                <p className="text-gray-700 mt-3 text-sm">{userInfo.bio}</p>
              </div>
              <div className="px-6 py-4 flex flex-row justify-around">
                <a href="https://dev.to/midasxiv">
                  <img
                    src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                    alt="Midas/XIV's DEV Profile"
                    height="28"
                    width="28"
                  />
                </a>
                <a
                  className="github-button"
                  href="https://github.com/midasxiv"
                  data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @midasxiv on GitHub"
                >
                  Follow @midasxiv
                </a>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};
