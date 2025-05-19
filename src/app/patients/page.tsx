"use client";
import Breadcrumb from "@components/breadcrumb";
import PictureToolbar from "./PictureToolbar";
import PictureList from "./PictureList";
import PreviewToolbar from "./PreviewToolbar";
import Preview from "./Preview";
import caseStore from "@store/caseStore";

export default function Page() {
  const selectedCase = caseStore(state => state.selectedCase);
  return (
    <section className="grid grid-rows-[minmax(100px,auto)_minmax(0,1fr)] gap-16 bg-white p-20">
      <header className="flex flex-col justify-between">
        <Breadcrumb />

        {selectedCase === null ? <PictureToolbar /> : <PreviewToolbar />}
      </header>

      <div className="bg-gray-100 rounded-4 p-10">{selectedCase === null ? <PictureList /> : <Preview />}</div>
    </section>
  );
}
