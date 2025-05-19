"use client";
import {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import {CaseItem} from "@schemas/case";
import {formatDotDate} from "@utils/convert";
import caseStore from "@store/caseStore";
import breadcrumbStore from "@store/breadcrumbStore";

type CaseListItemProps = {caseItem: CaseItem} & HTMLAttributes<HTMLLIElement>;
function CaseListItem(props: CaseListItemProps) {
  const {caseItem, className, ...others} = props;
  const {previewImg, title, date} = caseItem;
  const setSelectedCase = caseStore(state => state.setSelectedCase);
  const setBreadcrumb = breadcrumbStore(state => state.setBreadcrumb);
  const handleClick = () => {
    setSelectedCase(caseItem);
    const breadcrumb = breadcrumbStore.getState().breadcrumb;

    const breadcrumbUpdate = [breadcrumb[0], {label: caseItem.title}];
    setBreadcrumb(breadcrumbUpdate);
  };

  return (
    <li className={twMerge("border-b border-gray-100 box-border hover:bg-secondary", className)} {...others} onClick={handleClick}>
      <a href={void 0} className="grid grid-cols-[36px,1fr] items-center gap-8 px-6 py-6 cursor-pointer">
        <figure className="grid items-center justify-center border-1 border-gray-100 w-36 h-36 rounded-4 bg-white box-border">
          <img src={previewImg} alt="" className="inline-block w-24 h-24" />
        </figure>
        <dl className="grid items-center">
          <dt className="text-14 gray-500 leading-[1.5] font-bold">
            {title} <em className="text-gray-400">(example)</em>
          </dt>
          <dd className="text-12 gray-500 leading-[1.5] font-medium">{formatDotDate(date)}</dd>
        </dl>
      </a>
    </li>
  );
}

function CaseList() {
  const caseList = caseStore(state => state.caseList);

  return (
    <div className="h-[calc(100vh-190px)]">
      <ul className="h-[100%]">
        {caseList.map(item => {
          return <CaseListItem key={item.id} caseItem={item} />;
        })}
      </ul>
    </div>
  );
}

export default CaseList;
