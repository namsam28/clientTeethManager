"use client";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import patientsStore from "@store/patientsStore";
import caseStore from "@store/caseStore";

function CaseHeader() {
  const selectedPatient = patientsStore(state => state.selectedPatient);
  const setIsShowCase = caseStore(state => state.setIsShowCase);

  return (
    <div className="flex gap-10 border-b-2 border-gray-200 px-16 py-15">
      <button type="button" className="relative -left-6 inline-block w-40 text-center px-3 py-7" onClick={() => setIsShowCase(false)}>
        <ArrowLeftIcon className="relative inline-block size-20 fill-primary stroke-[3]" />
      </button>
      <p className="relative top-2 leading-38 font-medium">{selectedPatient?.name || ""}</p>
    </div>
  );
}

export default CaseHeader;
