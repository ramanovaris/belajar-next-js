import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  imageUrl: string;
  reposUrl: string;
}

const ListItemsSearch = ({ name, imageUrl, reposUrl }: Props) => {
  return (
    <div className="inline-flex w-full space-x-3 py-3">
      <Image alt={"img"} src={imageUrl} width={60} height={60} className="rounded-full border-2 border-zinc-100" />
      <div>
        <p className="text-lg font-bold">
          <Link href={`/cari/${name}`}>{name}</Link>
        </p>
        <p className="text-sm hover:border-b-4 border-indigo-500">
          <Link href={reposUrl}>Lihat Repo</Link>
        </p>
      </div>
    </div>
  );
};

export default ListItemsSearch;
