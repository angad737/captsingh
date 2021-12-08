export default function PostDetailPage(props) {
  const { post } = props;

  return (
    <div>
      <h1>{post.title || "Post Detail Page"}</h1>
      <p>{post.body || "Post Body"}</p>
    </div>
  );
}
