import React from "react";

async function getData(params: string) {
  const responeUser = await fetch(`https://api.github.com/users/${params}`);
  return responeUser.json();
}

export default async function DetailCari({ params }: { params: { slug: string } }) {
  const dataUser = await getData(params.slug);

  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>
    </div>
  );
}
