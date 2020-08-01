import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../index.module.css";

export default class BlogHeader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { blog } = this.props;
    const { title, description, author, createdAt } = blog;
    const { username, name } = author;
    const formattedDate = new Date(createdAt).toDateString();
    return (
      <div className="blog-header py-8 justify-center">
        <div className="flex justify-center">
          <div className="font-mono text-base antialiased font-medium mx-2">
            {name}
          </div>
          <div className="font-mono text-base antialiased font-medium mx-2">
            {username}
          </div>
          <div className="font-mono text-base antialiased font-medium mx-2 text-gray-600">
            {formattedDate}
          </div>
        </div>
        <div className="flex font-mono flex-col justify-center items-center my-4">
          <div className="text-5xl">{title}</div>
          <div className=" text-gray-600">{description}</div>
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
