const CustomOrderStatus = ({ status }) => {
  const statusClassName = () => {
    switch (status) {
      case "Completed":
        return "border border-green-300 bg-green-50 text-green-500";
      case "Apporoval Pending":
        return "border border-yellow-300 bg-yellow-50 text-yellow-600";
      case "In Progress":
        return "border border-green-300 bg-green-50 text-green-500";
      case "Draft":
        return "bg-slate-50 border border-slate-300";
      case "Review":
        return "border border-yellow-300 bg-yellow-50 text-yellow-600";

      default:
        break;
    }
  };

  return (
    <span
      className={`text-xs rounded-lg mx-3 px-1 whitespace-nowrap ${statusClassName()}`}
    >
      {status}
    </span>
  );
};

export default CustomOrderStatus;
