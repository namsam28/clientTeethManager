"use client";
import {debounce} from "lodash";
import {useEffect, useMemo} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Input} from "@components/form";
import {generatePatients} from "@utils/generatePatients";
import patientsStore from "@store/patientsStore";

type Inputs = {
  patientName: string;
};

function PatientSearch() {
  // const patientsList = patientsStore(state => state.patientsList);
  const setPatientList = patientsStore(state => state.setPatientList);
  const setFilterByName = patientsStore(state => state.setFilterByName);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();

  const debouncedFilter = useMemo(
    () =>
      debounce((name: string) => {
        setFilterByName(name);
      }, 300), // 300ms 후 실행
    [],
  );

  const watchPatientName = watch("patientName");

  const handleSearch = () => {};

  const onSubmit: SubmitHandler<Inputs> = params => {
    console.log(params);
  };

  useEffect(() => {
    debouncedFilter(watchPatientName);

    // cleanup: 언마운트 시 debounce 대기 중 함수 제거
    return () => {
      debouncedFilter.cancel();
    };
  }, [watchPatientName, debouncedFilter]);

  useEffect(() => {
    // 환자 리스트 세팅(환자명 랜덤)
    const generatePatientList = generatePatients();
    setPatientList(generatePatientList);
  }, []);

  return (
    // <div className="flex gap-10 justify-between border-b-2 border-gray-200 p-16" onSubmit={handleSubmit(onSubmit)}>
    <div className="flex gap-10 justify-between border-b-2 border-gray-200 p-16">
      <div className="relative flex w-full">
        <Input {...register("patientName")} className="pr-30" />
        <button type="button" className="absolute right-0 top-0 w-30 h-36 text-0 flex items-center justify-center z-10" onClick={handleSearch}>
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

export default PatientSearch;
