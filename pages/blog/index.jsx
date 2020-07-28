import { Component } from "react";
import Layout from "../../layouts/default";
import BlogCard from "../../components/blog-card";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const blog = {
      title: "Temp Blog 1",
      description: " Temp Blog 1 Description"
    };
    return (
      <Layout title="Blog">
        <div className="min-w-full primary-background">
          <h1 className="title text-5xl font-light">Blog</h1>
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
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
