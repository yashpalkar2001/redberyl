const CustomDetailDisplay = ({ lable, value }) => {
  return (
    <>
      <div>
        <h3 className="text-sm font-medium py-1 ">{lable}</h3>
        <p className="text-sm text-slate-400 font-medium">{value}</p>
      </div>
    </>
  );
};

export default CustomDetailDisplay;
