import {create} from "zustand";
import {PatientItem} from "@schemas/patients";
import {getInitialsConsonant} from "@utils/utils";

type PatientsStoreState = {
  patientsList: PatientItem[];
  setPatientList: (items: PatientItem[]) => void;
  setFilterByName: (name: string) => void;
  filteredPatients: PatientItem[];
};
const patientsStore = create<PatientsStoreState>((set, get) => ({
  filteredPatients: [],
  // selectPatient: null,
  patientsList: [],
  // selectCase: [],
  // caseList: [],
  // setSearchPatient: () => {},
  // 선택한 고객
  // setSelectPatient: () => {},
  // 고객 리스트
  setPatientList: items =>
    set({
      patientsList: items,
    }),
  setFilterByName: name =>
    set(state => {
      const keyword = name.trim();
      const keywordInitial = getInitialsConsonant(keyword);

      const filtered = state.patientsList.filter(patient => {
        const patientName = patient.name;
        return patientName.includes(keyword) || getInitialsConsonant(patientName).includes(keywordInitial);
      });

      return {filteredPatients: filtered};
    }),
}));

export default patientsStore;
