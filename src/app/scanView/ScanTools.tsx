"use clinet";
import Link from "next/link";
import {HomeIcon, ScissorsIcon, LockClosedIcon, MagnifyingGlassIcon, PhotoIcon} from "@heroicons/react/24/outline";

type ScanToolOption = {id: number; icon: typeof ScissorsIcon | typeof LockClosedIcon | typeof MagnifyingGlassIcon | typeof PhotoIcon; name: String};
const configOption = [
  {
    id: 1,
    icon: ScissorsIcon,
    name: "Trim",
  },
  {
    id: 2,
    icon: LockClosedIcon,
    name: "Lock Surface",
  },
  {
    id: 3,
    icon: MagnifyingGlassIcon,
    name: "High res",
  },
  {
    id: 4,
    icon: PhotoIcon,
    name: "HD photo",
  },
];

function ScanToolOptionItem(props: {optionProps: ScanToolOption}) {
  const {optionProps} = props;
  const {icon, name} = optionProps;
  const Icon = icon;
  return (
    <div className="grid items-center justify-center">
      <button type="button" className="cursor-default">
        <div className="grid justify-center">
          <Icon className="size-24 text-primary group-hover/home:text-primary" />
        </div>
        <span className="w-full text-center text-12 mt-4">{name}</span>
      </button>
    </div>
  );
}

function ScanTools() {
  return (
    <nav className="absolute z-10 left-4 top-4 grid gap-8 w-180">
      <div>
        <Link href="/patients" className="group/home flex items-center justify-center w-48 h-48 border-1 border-gray-300 bg-white rounded-4">
          <HomeIcon className="size-24 text-gray-700 group-hover/home:text-primary" />
        </Link>
      </div>
      <div className="bg-white border-1 border-gray-300">
        <h2 className="text-18 py-6 px-10">Scan: Lower</h2>
        <div className="grid grid-cols-2 py-10 gap-x-10 gap-y-6">
          {configOption.map(item => {
            return <ScanToolOptionItem key={item.id} optionProps={item} />;
          })}
        </div>
      </div>
    </nav>
  );
}

export default ScanTools;
