"use client";
// import {useEffect, useState} from "react";
import {ModuleRegistry, AllCommunityModule} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import {filteredDentalOutputConfig} from "@utils/config";
import Table from "./Table";

ModuleRegistry.registerModules([AllCommunityModule]);

export default async function Home() {
  const response = await fetch(`/api/dentalLab`);
  const dentalLabs = await response.json();
  const fields = filteredDentalOutputConfig.map(item => ({
    field: Object.keys(item)[0],
    headerName: Object.values(item)[0],
  }));

  return (
    <div className="w-full h-[100vh] bg-black py-20">
      <h1 className="w-full text-32 text-center text-white mb-32">서울시 치과기공사 인허가 정보</h1>
      <Table list={dentalLabs} />
    </div>
  );
}
