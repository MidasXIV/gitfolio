import { Component } from "react";
import PropTypes from "prop-types";
import BlogContent from "./content";
import BlogHeader from "./header";

export default class BlogLayout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { blog } = this.props;
    return (
      <div>
        <BlogHeader blog={blog} />
        <BlogContent blog={blog} />
      </div>
    );
  }
}

BlogLayout.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired
};
