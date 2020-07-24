import { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/default";
import EducationCard from "../components/education-card";
import ProfileCard from "../components/profile-card";

export default class About extends Component {
  static async getInitialProps() {
    const githubUser = "midasxiv";
    const githubResource = `https://api.github.com/users/${githubUser}`;
    const githubData = await fetch(githubResource);
    const parseGithubData = await githubData.json();
    return { user: parseGithubData };
  }

  render() {
    const { user } = this.props;

    return (
      <Layout title="About">
        <div className="min-w-full flex flex-col md:flex-row primary-background">
          <ProfileCard user={user} />
          <EducationCard />
        </div>
        <style jsx>{`
          .primary-background {
            background-color: #f2f2f2;
          }
        `}</style>
      </Layout>
    );
  }
}

About.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};
