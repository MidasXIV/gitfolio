import Layout from '../layouts/default';
import AboutCard from '../components/about-card';

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
        <AboutCard user={user} />
      </Layout>
    )
  }
}