import {ChevronRightIcon} from "@heroicons/react/24/outline";
function PatientItem() {
  return (
    <li>
      <a href={void 0} className="flex justify-between items-center py-10 px-16 cursor-pointer">
        <strong className="inline-block w-[60%] text-16 leading-[1.5] font-medium">홍길동</strong>
        <span className="inline-block w-[30%] text-right text-12">92.01.01</span>
      </a>
    </li>
  );
}

function Patients() {
  return (
    <div className="">
      <button type="button" className="flex justify-between w-full text-16 text-left px-10 py-16">
        <span className="text-16">Show all patients</span>
        <i>
          <ChevronRightIcon className="size-24 stroke-primary stroke-[3]" />
        </i>
      </button>
      <ul>
        <PatientItem />
        <PatientItem />
      </ul>
    </div>
  );
}

export default Patients;
