import DoctorProfile from "@components/doctor/DoctorProfile";
import {Button} from "@components/form";
import {PlusIcon} from "@heroicons/react/24/outline";

export default async function Page() {
  // const res = await fetch("https://your.api/dentists", {cache: "no-store"}); // 또는 `{ next: { revalidate: 60 } }`
  // const data = await res.json();

  const data = [
    {
      id: "1",
      name: "Apple",
      role: "user",
    },
    {
      id: "2",
      name: "Banana",
      role: "admin",
    },
    {
      id: "3",
      name: "Carrot",
      role: "user",
    },
  ];

  return (
    <div className="h-[100vh] flex flex-col align-items-center justify-items-center py-[10%]">
      <header className="w-full text-center">
        <h1 className="text-48 font-bold center">Smile Dental</h1>
      </header>

      <div className="flex grow align-items-center justify-items-center">
        <ul className="w-[60%] min-w-[768px] grid grid-cols-3 mx-auto place-items-center">
          {data.map((doctor: any) => (
            <DoctorProfile key={doctor.id} name={doctor.name} role={doctor.role} imageUrl={doctor.imageUrl} />
          ))}
        </ul>
      </div>

      <div className="text-center">
        <Button className="inline-flex">
          <PlusIcon className="size-20 stroke-[2]" />
          <span>Add User</span>
        </Button>
      </div>

      <footer>{/* <img src="" /> */}</footer>
    </div>
  );
}
