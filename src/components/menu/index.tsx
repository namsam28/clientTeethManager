import Image from "next/image";
import {UserIcon, CalendarIcon, DocumentMagnifyingGlassIcon, Bars3Icon} from "@heroicons/react/24/solid";
// import {} from "@heroicons/react/24/outline";
const CONFIG_MENU_LIST = [
  {
    icon: UserIcon,
    title: "Patients",
    key: "patients",
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: "Cases",
    key: "cases",
  },
  {
    icon: CalendarIcon,
    title: "Calendar",
    key: "calendar",
  },
  {
    icon: Bars3Icon,
    title: "More",
    key: "more",
  },
];
function Menu() {
  return (
    <ul className="grid grid-cols-4">
      {CONFIG_MENU_LIST.map(item => {
        return (
          <li key={item.key} className="text-center bg-gray-200 first-of-type:bg-white">
            <a href={void 0} className="grid place-items-center px-10 pt-20 pb-10 gap-5 cursor-pointer">
              <item.icon className="inline-block size-24 text-gray-600" />
              <span className="text-14">{item.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
