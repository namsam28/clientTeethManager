import {create} from "zustand";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbState {
  breadcrumbList: BreadcrumbItem[];
  setBreadcrumbList: (items: BreadcrumbItem[]) => void;
}

const breadcrumbStore = create<BreadcrumbState>((set, get) => ({
  breadcrumbList: [],
  setBreadcrumbList: items => set({breadcrumbList: items}),
}));

export default breadcrumbStore;
