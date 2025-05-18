import Breadcrumb from "@components/Breadcrumb";
import CaseToolbar from "./CaseToolbar";
import CaseList from "./CaseList";
import PreviewToolbar from "./PreviewToolbar";
import Preview from "./Preview";

export default function Page() {
  return (
    <section className="grid grid-rows-[minmax(100px,auto)_minmax(0,1fr)] gap-16 bg-white p-20">
      <header className="flex flex-col justify-between">
        <Breadcrumb />

        <CaseToolbar />
        <PreviewToolbar />
      </header>

      <div className="bg-gray-100 rounded-4 p-10 overflow-auto">
        <CaseList />
        <Preview />
      </div>
    </section>
  );
}
