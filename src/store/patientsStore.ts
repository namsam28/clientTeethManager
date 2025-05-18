import {create} from "zustand";
import {combine} from "zustand/middleware";

const patientsStore = create(
  combine(
    {
      selectPatient: null,
      patientsList: [],
      selectCase: [],
      caseList: [],
    },
    (set, get) => ({
      // 선택한 고객
      setSelectPatient: () => {},
      // 고객 리스트
      setPatientList: () => {},
      setSelectCase: () => {},
      setCaseList: () => {},
    }),
  ),
);

export default patientsStore;
