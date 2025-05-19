"use client";
import {ModuleRegistry, AllCommunityModule} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
ModuleRegistry.registerModules([AllCommunityModule]);
function Table(props) {
  const {list} = props;
  const columnDefs = list.map(item => ({
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
