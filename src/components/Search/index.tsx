import {UserPlusIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Input} from "@components/form";

function Search() {
  return (
    <div className="flex gap-10 justify-between border-b-2 border-gray-200 p-16">
      <div className="flex w-full">
        <Input />
        <button type="button" className="text-0">
          <MagnifyingGlassIcon className="size-16 stroke-primary stroke-[2]" />
          검색
        </button>
      </div>

      <button type="button" className="inline-block w-40 border-1 border-gray-100 text-center p-3">
        <UserPlusIcon className="relative left-2 inline-block size-20 fill-primary" />
      </button>
    </div>
  );
}

export default Search;
