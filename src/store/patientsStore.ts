import {create} from "zustand";
import {PatientItem} from "@schemas/patients";
import {getInitialsConsonant} from "@utils/utils";
import caseStore from "@store/caseStore";
type PatientsStoreState = {
  selectedPatient: null | PatientItem;
  patientsList: PatientItem[];
  filteredPatients: PatientItem[];
  setSelectedPatient: (items: PatientItem) => void;
  setPatientList: (items: PatientItem[]) => void;
  setFilterByName: (name: string) => void;
};
const patientsStore = create<PatientsStoreState>((set, get) => ({
  filteredPatients: [],
  selectedPatient: null,
  patientsList: [],
  // 선택한 고객
  setSelectedPatient: items => {
    set({
      selectedPatient: items,
    });

    // case 상태 변경
    caseStore.getState().setIsShowCase(true);
    caseStore.getState().clearSelectedCase();
  },
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
