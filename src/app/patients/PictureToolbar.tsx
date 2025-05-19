import {useEffect, useMemo} from "react";
import {debounce} from "lodash";
import {Checkbox} from "@components/form";
import {useForm} from "react-hook-form";
import {PictureStatus} from "@schemas/picture";
import pictureStore from "@store/pictureStore";

type Checks = {
  pictureFilter: keyof typeof PictureStatus;
};

function PictureToolbar() {
  const {
    register,
    watch,
    formState: {errors},
  } = useForm<Checks>();
  const setFilterByPicture = pictureStore(state => state.setFilterByPicture);

  const debouncedFilter = useMemo(
    () =>
      debounce(filter => {
        setFilterByPicture(filter);
      }, 100), // 300ms 후 실행
    [],
  );

  const watchPictureFilter = watch("pictureFilter");

  useEffect(() => {
    debouncedFilter(watchPictureFilter);

    // cleanup: 언마운트 시 debounce 대기 중 함수 제거
    return () => {
      debouncedFilter.cancel();
    };
  }, [watchPictureFilter, debouncedFilter]);

  return (
    <div className="flex gap-16">
      <Checkbox {...register("pictureFilter")} value="digital">
        Digital impression
      </Checkbox>
      <Checkbox {...register("pictureFilter")} value="ct">
        CT scan
      </Checkbox>
      <Checkbox {...register("pictureFilter")} value="photo">
        Photo
      </Checkbox>
    </div>
  );
}

export default PictureToolbar;
