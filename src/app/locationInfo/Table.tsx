"use client";
import {AgGridReact} from "ag-grid-react";
import {filteredDentalOutputConfig} from "@utils/config";
function Table(props) {
  const {list} = props;
  const columnDefs = list.map(item => ({
    field: Object.keys(item)[0],
    headerName: Object.values(item)[0],
  }));

  return (
    <div className="h-[500px] mx-30">
      <Suspense fallback={null}>
        <AgGridReact rowData={dentalLabs} columnDefs={columnDefs} />
      </Suspense>
    </div>
  );
}
export default Table;
