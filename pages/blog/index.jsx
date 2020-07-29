import { Component } from "react";
import Layout from "../../layouts/default";
import { getAllBlogs } from "../../lib/blog";
import BlogCard from "../../components/blog-card";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Layout title="Blog">
        <div className="min-w-full primary-background">
          <h1 className="title text-5xl font-light">Blog</h1>
          <ul>
            {getAllBlogs().map((blog) => (
              <BlogCard blog={blog} key={blog.slug} />
            ))}
          </ul>
        </div>
        <style jsx>{`
          .primary-background {
            background-color: #f2f2f2;
          }
        `}</style>
      </Layout>
    );
  }
}
