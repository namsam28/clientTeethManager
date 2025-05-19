import {create} from "zustand";
import {PictureItem, PictureStatus} from "@schemas/picture";
import {tempPictureArray} from "@utils/tempData";

type PictureStoreState = {
  pictureList: PictureItem[];
  filterPictureList: PictureItem[];
  setPictureList: (items: PictureItem[]) => void;
  setFilterByPicture: (items: (keyof typeof PictureStatus)[] | false) => void;
};
const pictureStore = create<PictureStoreState>((set, get) => ({
  pictureList: tempPictureArray,
  filterPictureList: [],
  setPictureList: items =>
    set({
      pictureList: items,
    }),
  setFilterByPicture: items => {
    if (items === false || items?.length === 0) {
      set({filterPictureList: get().pictureList});
    } else {
      console.log(items);
      const filterData = get().pictureList.filter(pictureItem => {
        return items.includes(pictureItem.type);
      });
      console.log("filterData", filterData);
      set({filterPictureList: filterData});
    }
  },
}));

export default pictureStore;
