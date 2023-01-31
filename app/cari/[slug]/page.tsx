import React, { Suspense } from "react";
import RepoList from "./sectionRepository";

async function getDataUser(params: string) {
  const responeUser = await fetch(`https://api.github.com/users/${params}`, {
    headers: { Authorization: "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" },
  });
  return responeUser.json();
}

export default async function DetailCari({ params }: { params: { slug: string } }) {
  const dataUser = await getDataUser(params.slug);

  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>

      <div style={{ marginTop: "10px" }}>
        <Suspense fallback={<div>Sedang mengambil repository...</div>}>
          {/* @ts-ignore */}
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
    </div>
  );
}
