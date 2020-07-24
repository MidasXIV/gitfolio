import { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/default";
import { userRepositories } from "../config/user.config";
import RepositoryCard from "../components/repository-card";

export default class Repositories extends Component {
  static async getInitialProps() {
    const repositoryData = await fetch(
      userRepositories.userRepositoriesResource
    );
    const parsedRepositoryData = await repositoryData.json();

    // Filter github repositories response and keep only featured repos
    const filteredRepositoryData = parsedRepositoryData.filter((repo) =>
      userRepositories.featured.some(
        (featuredRepo) => featuredRepo.name === repo.name
      )
    );

    // Mix Filtered repositories response with
    // featured repos to get custom props
    const repositories = filteredRepositoryData.map((repo) => {
      const featuredRepo = userRepositories.featured.find(
        (_featuredRepo) => _featuredRepo.name === repo.name
      );
      return { ...repo, ...featuredRepo };
    });

    return { repositories };
  }

  render() {
    const { repositories } = this.props;
    return (
      <Layout title="Repositories">
        <div className="px-4 py-4 primary-background">
          {/* <h1 className="font-bold text-2xl">Featured Repositories</h1> */}
          <ul className="min-w-full flex flex-wrap justify-around flex-col md:flex-row">
            {repositories.map((repository) => {
              return (
                <RepositoryCard key={repository.id} repository={repository} />
              );
            })}
          </ul>
        </div>
        <style jsx>{`
          .primary-background {
            background-color: #f2f2f2;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            background-color: #ffffff;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

Repositories.propTypes = {
  repositories: PropTypes.objectOf(PropTypes.any).isRequired
};
