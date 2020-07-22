import Layout from '../layouts/default';
import BlogCard from '../components/blog-card';

import { Component } from 'react';

export default class Blog extends Component {


  render() {

    return (
      <Layout title="Blog">
        <div className="min-w-full primary-background">
          <h1 className="title text-5xl font-light">Blog</h1>
          <BlogCard />
          <BlogCard />
        </div>
        <style jsx>{`
          .primary-background {
            background-color: #F2F2F2; 
          }
        `}</style>
      </Layout>
    )
  }
}