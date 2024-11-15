// import React from "react";

const CustomBtn = ({ name, btnClass, iconName, iconClass }) => {
  return (
    <>
      <button
        className={`border border-slate-300 text-xs py-1 px-3 rounded-md mx-2 font-medium hover:bg-blue-600 hover:text-white ${btnClass}`}
      >
        <i className={`pi ${iconName}  ${iconClass}`}></i>
        <span className="px-2">{name}</span>
      </button>
    </>
  );
};

export default CustomBtn;
