import Link from "next/link";
type Props = {
  name: string;
  role: string;
  imageUrl?: string;
};

function DoctorProfile({name, role, imageUrl}: Props) {
  return (
    <li className="w-full text-center">
      <Link href="/patients" className="block cursor-pointer mx-[10%]">
        <figure className="relative w-[100%] pt-[100%] overflow-hidden bg-gray-100 mx-auto rounded-[50%]">
          {imageUrl ? (
            <img className="w-full h-full bg-cover bg-center" src={imageUrl} alt={name} />
          ) : (
            <svg className="absolute left-[50%] top-[50%] w-[50%] fill-gray-400 -translate-x-1/2 -translate-y-1/2">
              <use xlinkHref="#icon-user" />
            </svg>
          )}
        </figure>
        <p className="mt-12 text-24 leading-[1.5]">{name}</p>
        <em className="block text-14 leading-[1.5] italic">{role}</em>
      </Link>
    </li>
  );
}

export default DoctorProfile;
