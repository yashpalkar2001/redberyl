import { useDispatch, useSelector } from "react-redux";
import { setSelectedDetails } from "../redux/ordersSlice";
import CustomOrderStatus from "./CustomOrderStatus";

const CustomOrderCard = ({ item }) => {
  const selectedOrderDetails = useSelector(
    (state) => state.orders.selectedOrderDetails
  );

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`p-3 border-b border-slate-100 flex items-center cursor-pointer justify-between ${
          item.orderId == selectedOrderDetails.orderId && "bg-slate-100"
        }`}
        onClick={() => dispatch(setSelectedDetails(item))}
      >
        <div>
          <h1 className="text-base font-semibold"> {item.orderId}</h1>
          <p className="text-sm text-slate-400 font-medium">
            {item.companyName}
          </p>
        </div>
        <CustomOrderStatus status={item.status} />
        <i className="pi pi-angle-right "></i>
      </div>
    </>
  );
};

export default CustomOrderCard;
