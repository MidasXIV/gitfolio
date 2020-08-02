import { Component } from "react";
import PropTypes from "prop-types";

export default class BlogHeader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { blog } = this.props;
    const { title, description, author, createdAt } = blog;
    const { username, name, avatar } = author;
    const formattedDate = new Date(createdAt).toDateString();
    return (
      <div className="blog-header py-8 justify-center">
        {/* Title and Description */}
        <div className="flex font-mono flex-col justify-center items-center my-6">
          <div className="text-5xl text-center">{title}</div>
          <p className="text-gray-600 text-center">{description}</p>
        </div>

        {/* User Information and blog written at date */}
        <div className="flex justify-center items-center divide-x-2 divide-gray-400">
          <div className="flex flex-row items-center pr-5">
            <div>
              <img
                className="rounded-lg mx-2 w-10"
                src={avatar}
                alt="User Github logo"
              />
            </div>

            <div>
              <div className="font-mono text-base antialiased font-medium mx-2">
                {name}
              </div>
              <div className="font-mono text-xs antialiased font-medium mx-2">
                {username}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start pl-5">
            <p className="font-mono text-xs antialiased font-medium mx-2 -mb-1">
              written on,
            </p>
            <div className="font-mono text-base antialiased font-medium mx-2 text-gray-600">
              {formattedDate}
            </div>
          </div>
        </div>
        <style jsx>{`
          .blog-header {
            border-bottom: 1px solid #eaeaea;
          }
        `}</style>
      </div>
    );
  }
}

BlogHeader.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired
};
