import {Checkbox} from "@components/form";

function CaseToolbar() {
  return (
    <div className="flex gap-16">
      <Checkbox>Digital impression</Checkbox>
      <Checkbox>CT scan</Checkbox>
      <Checkbox>Photo</Checkbox>
    </div>
  );
}

export default CaseToolbar;
