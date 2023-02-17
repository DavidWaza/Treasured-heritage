import React from "react";

const NewsUpdate = ({ project }) => {
  return (
    // <div>{data}</div>
    console.log(project)
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1'`);
  const project = await res.json();

  return { props: { project } };
}

export default NewsUpdate;
