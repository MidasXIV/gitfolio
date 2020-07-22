import Layout from '../components/default';
import EducationCard from '../components/education-card';
import AboutCard from '../components/profile-card';

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
        <div className="min-w-full flex flex-col md:flex-row primary-background">
          <AboutCard user={user} />
          <EducationCard />
        </div>
        <style jsx>{`
          .primary-background {
            background-color: #F2F2F2; 
          }
        `}</style>
      </Layout>
    )
  }
}