import Head from 'next/head'
import Image from 'next/image'
import Hero from "../components/hero/hero";
import FeaturedPosts from "../components/posts/featured-posts";
import { DUMMY_POSTS } from "../dummydata/dummyPosts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Capt Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getFeaturedPosts(),
    },
    revalidate: 300,
  };
}