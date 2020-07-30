import { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.css";

export default class BlogLayout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { blog } = this.props;
    const { slug, title, author, content } = blog;
    return (
      <div>
        <article className="markdown-body px-4 py-4 mx-auto xs:w-full sm:w-1/2">
          <ReactMarkdown source={content} className={styles.markdown} />
        </article>
      </div>
    );
  }
}

BlogLayout.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired
};