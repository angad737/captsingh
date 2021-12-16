import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-as-an-airline-pilot-india",
  title: "Indian Commercial Pilot 101",
  image: "getting-started-as-an-airline-pilot-india.jpg",
  date: "2021-12-05",
  content: "# This is a Dummy Post",
};

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img: (image) => {
      console.log(image);
      return <Image alt={image.alt} src={image.src} layout="responsive" />;
    },
  };

  const MarkdownComponents = {
    // Convert Markdown img to next/image component and set height, width and priority
    // example: ![AltText {priority}{768x432}](...
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "");
        const isPriority = image.properties.alt
          ?.toLowerCase()
          .includes("{priority}");
        const metaWidth = image.properties.alt.match(/{([^}]+)x/);
        const metaHeight = image.properties.alt.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "768";
        const height = metaHeight ? metaHeight[1] : "432";

        return (
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown children={post.content} components={MarkdownComponents} />
    </article>
  );
};

export default PostContent;
