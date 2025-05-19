import {create} from "zustand";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbState {
  breadcrumb: BreadcrumbItem[];
  setBreadcrumb: (items: BreadcrumbItem[]) => void;
}

const breadcrumbStore = create<BreadcrumbState>((set, get) => ({
  breadcrumb: [],
  setBreadcrumb: items => set({breadcrumb: items}),
}));

export default breadcrumbStore;
