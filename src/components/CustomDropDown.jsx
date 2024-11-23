import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";

const CustomDropDown = ({
  placeholder,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      className={`w-[20%] border border-slate-300  rounded-md p-2 !placeholder:text-slate-400 ${className}`}
    />
  );
};

export default CustomDropDown;
