import { Component } from "react";
import PropTypes from "prop-types";

export default class Stargazers extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { stargazers } = this.props;
    return (
      <div className="px-4 py-4">
        <div className="flex items-center text-grey-darker mb-4">
          <svg
            className="h-6 w-6 text-grey mr-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              className="heroicon-ui"
              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
            />
          </svg>
          <span>
            <strong className="text-black">{stargazers}</strong>{" "}
            Stargazers
          </span>
        </div>
        <div className="flex">
          <div className="flex mr-2">
            <img
              className="relative border-2 border-white rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/42.jpg"
              alt=""
            />
            <img
              className="relative border-2 border-white rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt=""
            />
            <img
              className="relative border-2 border-white rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt=""
            />
            <img
              className="relative border-2 border-white rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt=""
            />
            <img
              className="relative border-2 border-white rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt=""
            />
            <img
              className="relative border-2 border-white rounded-full h-10 w-10 "
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
          </div>
          <span className="flex items-center justify-center text-sm text-grey-darker font-semibold border-2 border-grey-light rounded-full h-10 w-10">
            +3
          </span>
        </div>
      </div>
    );
  }
}

Stargazers.propTypes = {
  stargazers: PropTypes.number.isRequired
};
