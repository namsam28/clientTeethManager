import {HTMLAttributes} from "react";
import {PictureItem} from "@schemas/picture";
import pictureStore from "@store/pictureStore";
import {formatDotDate} from "@utils/convert";
type PictureListItemProps = {pictureItem: PictureItem} & HTMLAttributes<HTMLLIElement>;
function PictureListItem(props: PictureListItemProps) {
  const {pictureItem} = props;
  const {thumbnail, title, date} = pictureItem;
  return (
    <li className="grid bg-white border border-gray-100 w-160 p-2 pb-6 rounded-2">
      <a href={void 0} className="inline-block cursor-default">
        <figure className="relative flex align-items justify-center w-full pt-[100%] bg-gray-50">
          <img src={thumbnail} alt="" className="absolute left-0 top-0 w-full h-full object-cover" />
        </figure>
        <p className="block text-center text-14 text-gray-700 font-medium mt-4">{title}</p>
        <em className="block text-12 text-gray-400 text-center mt-2">{formatDotDate(date)}</em>
      </a>
    </li>
  );
}

function PictureList() {
  const filterPictureList = pictureStore(state => state.filterPictureList);
  return (
    <ul className="flex flex-wrap gap-12">
      {filterPictureList.map(item => {
        return <PictureListItem key={item.id} pictureItem={item} />;
      })}
    </ul>
  );
}

export default PictureList;
