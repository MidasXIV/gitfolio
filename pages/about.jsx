import Layout from '../layouts/default';
import EducationCard from '../components/education-card';
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
        <div className="flex flex-col md:flex-row">
          <AboutCard user={user} />
          <EducationCard />
        </div>
      </Layout>
    )
  }
}