"use client";
import {useRef, HTMLAttributes} from "react";
import patientStore from "@store/patientsStore";
import {PatientItem} from "@schemas/patients";
import {formatBirthDate} from "@utils/convert";
import {useVirtualizer} from "@tanstack/react-virtual";

type PatientListItemProps = Omit<PatientItem, "id"> & HTMLAttributes<HTMLLIElement>;
function PatientListItem(props: PatientListItemProps) {
  const {name, birth, ...others} = props;

  return (
    <li className="hover:bg-secondary" {...others}>
      <a href={void 0} className="flex justify-between items-center py-10 px-16 cursor-pointer">
        <strong className="inline-block w-[60%] text-16 leading-[1.5] font-medium">{name}</strong>
        <span className="inline-block w-[30%] text-right text-12">{formatBirthDate(birth)}</span>
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
    estimateSize: () => 50, // 각 항목 높이(px)
    overscan: 5, // 근처 항목까지 미리 렌더링
  });

  return (
    <div className="h-[calc(100vh-190px)]">
      <div
        ref={parentRef}
        className="h-[100%] overflow-auto border rounded max-h-[100%]
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
                name={patient.name}
                birth={patient.birth}
                className="absolute w-full border-b px-4 py-2"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PatientList;
