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
      <Layout title="About" class="container">
        <main>
          <h1 className="title">About Page of the Gitfolio</h1>
          <img src={user.avatar_url} alt="User Github logo" height="200px" />
          <p className="description">
            {user.login} - {user.bio}
          </p>
        </main>
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
      
          main {
            padding: 5rem 2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
      
          .title a {
            color: #0070f3;
            text-decoration: none;
          }
      
          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }
      
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
      
          .title,
          .description {
            text-align: center;
          }
      
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
        `}</style>
      </Layout>

    )
  }
}