import { Component } from "react";
import PropTypes from "prop-types";

export default class RepositoryCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { repository } = this.props;
    return (
      <div>
        <div className="px-4 py-4">
          <div className="sm:max-w-full md:max-w-xs lg:max-w-sm flex flex-col sm:flex-row md:flex-col rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              className="rounded-lg shadow-lg object-cover sm:max-w-xs md:max-w-sm"
              src={repository.preview}
              alt="User Github logo"
            />
            <div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl">
                  {repository.displayName}
                </div>
                <p className="text-gray-700 text-sm">
                  {repository.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RepositoryCard.propTypes = {
  repository: PropTypes.objectOf(PropTypes.number)
};

RepositoryCard.propTypes = {
  repository: PropTypes.objectOf(PropTypes.number).isRequired
};
