async function getDataRepos(params: string) {
  const responeRepos = await fetch(`https://api.github.com/users/${params}/repos`);
  await new Promise((r) => setTimeout(r, 2000));
  return responeRepos.json();
}

const RepoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);

  return (
    <>
      <p>List Repository</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

export default RepoList;
