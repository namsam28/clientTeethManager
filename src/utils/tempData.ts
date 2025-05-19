import {CaseItem} from "@schemas/case";
import {PictureItem} from "@schemas/picture";

export const tempCaseArray: CaseItem[] = [
  {id: "1", title: "Status Scan", type: "scan", date: "2021-11-09", previewImg: "/ui/scan.png"},
  {id: "2", title: "Crown", type: "crown", date: "2020-01-12", previewImg: "/ui/scan.png"},
  {id: "3", title: "Treatment Simulation", type: "simulate", date: "2024-07-21", previewImg: "/ui/scan.png"},
];

export const tempPictureArray: PictureItem[] = [
  {
    id: "1",
    title: "Digital Impression",
    type: "digital",
    date: "2023-10-01",
    thumbnail: "/temp/digital.png",
  },
  {
    id: "2",
    title: "CT",
    type: "ct",
    date: "2022-02-11",
    thumbnail: "/temp/ct_scan.png",
  },
  {
    id: "3",
    title: "Photo",
    type: "photo",
    date: "2024-70-30",
    thumbnail: "/temp/history.png",
  },
];
