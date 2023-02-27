import ListItemsSearch from "components/ListItemsSearch";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fatcher = (url: string) => fetch(url).then((res) => res.json());
interface Props {
  query: string;
}
export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fatcher);
  var loading = !data && !error;

  return (
    <div style={{ marginTop: "10px" }}>
      <p>
        Hasil Pencarian : <span className="text-lg font-bold">{query}</span>
      </p>
      <div className="mt-10">
        {loading && "Tunggu Sebentar..."}
        {/* {JSON.stringify(data)} */}
        {data &&
          data.items.map((user: any, index: number) => {
            return <ListItemsSearch key={index} name={user.login} imageUrl={user.avatar_url} reposUrl={user.repos_url} />;
          })}
      </div>
    </div>
  );
}
