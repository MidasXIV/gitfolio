import { Component } from "react";
import PropTypes from "prop-types";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../layouts/default";
import { getAllBlogs } from "../../lib/blog";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { blog } = this.props;
    const { slug, title, author, content } = blog;

    if (!content) return <></>;

    return (
      <Layout title={`Gitfolio | ${title}`}>
        <ReactMarkdown source={content} />
      </Layout>
    );
  }
}

BlogPost.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired
};

export async function getStaticPaths() {
  /**
   * If a page has dynamic routes (documentation) and uses getStaticProps
   * it needs to define a list of paths that have to be rendered to
   * HTML at build time.
   *
   * # https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
   *
   * If you export an async function called getStaticPaths from a page
   * that uses dynamic routes, Next.js will statically pre-render all
   * the paths specified by getStaticPaths.
   */

  /** param: {key: ..} the key should be the name of file [blog] hence blog */
  const paths = getAllBlogs().map((blog) => {
    return {
      params: {
        blog: blog.slug
      }
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  /**
   * params contains the `blog` key passed in path of getStaticPaths.
   * If the route is like /blog/first-post, then params.blog is first-post
   */
  const slug = params.blog;
  const rawContent = await import(`../../content/blogs/${slug}.md`);
  /** data has properties title and author */
  const { data, content } = matter(rawContent.default);

  // Pass blog data to the page via props
  return { props: { blog: { slug, content, ...data } } };
}

// refer
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
// https://github.com/kamranahmedse/roadmap.sh/blob/master/pages/guides/%5Bguide%5D.js
// https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/
// we need to do getStatic paths to render dynamic routes
