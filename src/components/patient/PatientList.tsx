"use client";
import {useRef, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import patientStore from "@store/patientsStore";
import breadcrumbStore from "@store/breadcrumbStore";
import {PatientItem} from "@schemas/patients";
import {formatDotDate} from "@utils/convert";
import {useVirtualizer} from "@tanstack/react-virtual";

type PatientListItemProps = PatientItem & HTMLAttributes<HTMLLIElement>;
function PatientListItem(props: PatientListItemProps) {
  const {id, name, birth, className, ...others} = props;
  const setSelectedPatient = patientStore(state => state.setSelectedPatient);
  const handleClick = () => {
    setSelectedPatient({id, name, birth});
    breadcrumbStore.getState().setBreadcrumb([{label: name}]);
  };

  return (
    <li className={twMerge("border-b border-gray-100 box-border hover:bg-secondary", className)} {...others} onClick={handleClick}>
      <a href={void 0} className="flex justify-between items-center py-10 px-16 cursor-pointer">
        <strong className="inline-block w-[60%] text-16 leading-[1.5] font-medium">{name}</strong>
        <span className="inline-block w-[30%] text-right text-12">{formatDotDate(birth)}</span>
      </a>
    </li>
  );
}

function PatientList() {
  const parentRef = useRef<HTMLDivElement>(null);
  const filteredPatients = patientStore(state => state.filteredPatients);

  const rowVirtualizer = useVirtualizer({
    count: filteredPatients.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 44, // 각 항목 높이(px)
    overscan: 5, // 근처 항목까지 미리 렌더링
  });

  return (
    <div className="h-[calc(100vh-190px)]">
      <div
        ref={parentRef}
        className="h-[100%] overflow-auto max-h-[100%]
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-700
        ">
        <ul
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}>
          {rowVirtualizer.getVirtualItems().map(virtualRow => {
            const patient = filteredPatients[virtualRow.index];
            return (
              <PatientListItem
                key={patient.id}
                className="absolute w-full"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                {...patient}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PatientList;
