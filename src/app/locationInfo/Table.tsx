"use client";
import {ModuleRegistry, AllCommunityModule, type ColDef} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import {DentalLabInfo} from "@schemas/dental";
ModuleRegistry.registerModules([AllCommunityModule]);
type TableType = {
  list: DentalLabInfo[];
};
function Table(props: TableType) {
  const {list} = props;
  const columnDefs: ColDef[] = list.map(item => ({
    field: Object.keys(item)[0],
    headerName: Object.values(item)[0],
  }));

  return (
    <div className="h-[500px] mx-30">
      <AgGridReact rowData={list} columnDefs={columnDefs} />
    </div>
  );
}
export default Table;
