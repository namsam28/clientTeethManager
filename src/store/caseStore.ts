import {create} from "zustand";
import {CaseItem} from "@schemas/case";
import {tempCaseArray} from "@utils/tempData";

type CaseStoreState = {
  isShowCase: boolean;
  selectedCase: CaseItem | null;
  caseList: CaseItem[];
  setIsShowCase: (bool: boolean) => void;
  setSelectedCase: (item: CaseItem) => void;
  clearSelectedCase: () => void;
};
const caseStore = create<CaseStoreState>((set, get) => ({
  isShowCase: false,
  selectedCase: null,
  caseList: tempCaseArray,
  setIsShowCase: bool => {
    set({isShowCase: bool});
  },
  setSelectedCase: item => {
    set({selectedCase: item});
  },
  clearSelectedCase: () => {
    set({selectedCase: null});
  },
}));

export default caseStore;
