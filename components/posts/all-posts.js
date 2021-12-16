import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

const AllPosts = ({ posts }) => {
  console.log(`posts recieved in all-posts.js: ${posts}`);
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
