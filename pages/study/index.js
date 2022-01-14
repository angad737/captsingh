import Link from "next/link";

const StudyHomePage = (props) => {
  console.log("/study Page props: ", props);
  return (
    <div>
      <h1>Study</h1>
      <p>This page is under development...</p>
      <ul>
        <li>
          <Link href="/study/a320">
            <a>A320</a>
          </Link>
        </li>
        <li>
          <Link href="/study/navigation">
            <a>General Navigation</a>
          </Link>
        </li>
      </ul>
      <p>{JSON.stringify(props.data)}</p>
    </div>
  );
};

export default StudyHomePage;

export async function getStaticProps() {
  const res = await fetch(
    "https://bxoljrlara.execute-api.ap-south-1.amazonaws.com/dev/localities?q=122001"
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
