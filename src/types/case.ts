enum CaseStatus {
  scan,
  crown,
  simulate,
}
export type CaseItem = {
  id: string;
  title: string;
  type: keyof typeof CaseStatus;
  date: string;
  previewImg: string;
};
