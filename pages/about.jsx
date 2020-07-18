import Layout from '../layouts/default';

import { Component } from 'react';

export default class About extends Component {

  static async getInitialProps() {
    const githubUser = 'midasxiv';
    const githubResource = `https://api.github.com/users/${githubUser}`;
    const githubData = await fetch(githubResource);
    const parseGithubData = await githubData.json();
    return { user: parseGithubData }
  }

  render() {

    const { user } = this.props;

    return (
      <Layout title="About">
        <div className="px-4 py-4">
          <div className="sm:max-w-xs md:max-w-xs sm:w-1/2 max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
            <img className="rounded-lg" src={user.avatar_url} alt="User Github logo" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{user.login}</div>
              <p className="text-gray-700 text-base">
                {user.bio}
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}