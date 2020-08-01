import blogs from "../content/blogs.json";
import authors from "../content/authors.json";

export const getAllBlogs = () => {
  return blogs
    .filter((blog) => !blog.draft)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
};

export const getFeaturedBlogs = () => {
  return getAllBlogs().filter((blog) => blog.featured);
};

export const getRequestedblog = (slug) => {
  const blog = blogs.find((_blog) => _blog.slug === slug);
  if (!blog) {
    return null;
  }

  try {
    return {
      ...blog,
      author: authors.find((author) => author.username === blog.author) || {}
    };
  } catch (e) {
    console.error(e);
  }

  return null;
};
