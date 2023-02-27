"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function page() {
  const [query, setQuery] = useState("");

  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div>
      <form onSubmit={onSearch} className="w-full flex">
        <input className="bg-zinc-100 w-5/6 px-3" type="text" placeholder="Cari User Github" />
        <button className="bg-blue-600 w-1/6 text-white py-2 rounded-md">Cari Orang</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
