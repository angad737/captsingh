import Link from "next/link";

const StudyHomePage = (props) => {
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
    </div>
  );
};

export default StudyHomePage;
