export enum PictureStatus {
  digital,
  ct,
  photo,
}
export type PictureItem = {
  id: string;
  title: string;
  type: keyof typeof PictureStatus;
  date: string;
  thumbnail: string;
};
