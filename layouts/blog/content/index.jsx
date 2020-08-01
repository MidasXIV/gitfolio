import { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "../index.module.css";

export default class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { blog } = this.props;
    const { slug, title, author, content } = blog;
    return (
      <div>
        <article className="blog-border px-4 py-4 mx-auto xs:w-full sm:w-1/2">
          <ReactMarkdown source={content} className={styles.markdown} />
        </article>
        <style jsx>{`
          .blog-border {
            border-left: 1px solid #eaeaea;
            border-right: 1px solid #eaeaea;
          }
        `}</style>
      </div>
    );
  }
}

BlogContent.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired
};
