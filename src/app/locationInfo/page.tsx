// import {useEffect, useState} from "react";
import Table from "./Table";

export default async function Home() {
  // const response = await fetch(`http://localhost:3000/api/dentalLab`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dentalLab`, {cache: "no-store"});
  const dentalLabs = await response.json();

  return (
    <div className="w-full h-[100vh] bg-black py-20">
      <h1 className="w-full text-32 text-center text-white mb-32">서울시 치과기공사 인허가 정보</h1>
      <Table list={dentalLabs} />
    </div>
  );
}
