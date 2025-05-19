import {HTMLAttributes} from "react";
import patientsStore from "@store/patientsStore";

function PreviewInfo() {
  const selectedPatient = patientsStore(state => state.selectedPatient);
  const Dt = (props: HTMLAttributes<HTMLLIElement>) => <dt className="text-13 font-bold">{props.children}</dt>;
  const Dd = (props: HTMLAttributes<HTMLLIElement>) => <dd className="text-13 ">{props.children}</dd>;

  return (
    <div className="absolute left-20 top-30">
      <h3 className="text-24 font-medium mb-10">
        {selectedPatient?.name} <em className="text-gray-400">(example)</em>
      </h3>
      <dl className="grid grid-cols-[90px,1fr] gap-x-6 gap-y-2 text-left">
        <Dt>Send to</Dt>
        <Dd>In-house</Dd>
        <Dt>Delivery date</Dt>
        <Dd>-</Dd>
        <Dt>Case no</Dt>
        <Dd>20210922_1423_11</Dd>
        <Dt>Scanned</Dt>
        <Dd>2021.09.08 13:55</Dd>
      </dl>
    </div>
  );
}

function Preview() {
  return (
    <div className="relative bg-white h-[calc(100vh-220px)] overflow-hidden">
      <PreviewInfo />
      <div className="flex align-center justify-center box-border p-70 h-full place-items-center">
        <img src="/temp/preview.png" alt="" className="max-w-[calc(100%-140px)] max-h-[calc(100%-140px)] w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default Preview;
