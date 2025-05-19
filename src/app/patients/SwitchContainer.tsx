"use client";
import {useEffect} from "react";
import caseStore from "@store/caseStore";
import PatientSearch from "@components/patient/PatientSearch";
import PatientList from "@components/patient/PatientList";
import CaseHeader from "@components/case/CaseHeader";
import CaseList from "@components/case/CaseList";
import {generatePatients} from "@utils/generatePatients";
import patientsStore from "@store/patientsStore";
import breadcrumbStore from "@store/breadcrumbStore";

function SwitchContainer() {
  const isShowCase = caseStore(state => state.isShowCase);

  useEffect(() => {
    // 환자 리스트 세팅(환자명 랜덤)
    const generatePatientList = generatePatients();
    patientsStore.getState().setPatientList(generatePatientList);
    breadcrumbStore.getState().setBreadcrumb([{label: generatePatientList[0].name}]);
  }, []);

  return (
    <div className="w-full">
      <div className={`grid grid-cols-2 w-[200%] transform transition-transform duration-500 ease-in-out ${isShowCase ? "-translate-x-[50%]" : "translate-x-0"}`}>
        <div className={`duration-300 ease-in-out ${isShowCase ? "opacity-0 pointer-events-none" : "opacity-1"}`}>
          <PatientSearch />
          <PatientList />
        </div>

        <div className={`duration-300 ease-in-out ${isShowCase ? "opacity-1" : "opacity-0 pointer-events-none"}`}>
          <CaseHeader />
          <CaseList />
        </div>
      </div>
    </div>
  );
}

export default SwitchContainer;
