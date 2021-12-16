import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const postPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={postPath}>
        <a>
          <div className={classes.image}>
            <Image
              alt={title}
              src={imagePath}
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
