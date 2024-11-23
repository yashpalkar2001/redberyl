// import  from "react";
import "primeicons/primeicons.css";
import CustomBtn from "../components/CustomBtn";
import him from "../assets/him.jpg";
import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import CustomDropDown from "../components/CustomDropDown";
import CustomCard from "../components/CustomCard";
import { useSelector, useDispatch } from "react-redux";
import { setOrderList, setSelectedDetails } from "../redux/ordersSlice";
import CustomDetailDisplay from "../components/CustomDetailDisplay";
import CustomOrderCard from "../components/CustomOrderCard";
import CustomOrderStatus from "../components/CustomOrderStatus";
// import { orders } from "../../data.json";

const Orders = () => {
  const orderDetailList = [
    { name: "Order Details" },
    { name: "Order Requirements" },
    { name: "Contacts" },
    { name: " Documents" },
    { name: " Status History" },
    { name: "Account Manager" },
  ];
  const [orderDetailListChange, setOrderDetailListChange] =
    useState("Order Details");

  const selectedOrderDetails = useSelector(
    (state) => state.orders.selectedOrderDetails
  );
  const orderList = useSelector((state) => state.orders.orderList);
  const dispatch = useDispatch();

  useEffect(() => {
    const gettingData = async () => {
      const res = await fetch("../../data.json")
        .then((item) => item.json())
        .catch((err) => console.log(err));
      const ans = await res.orders;

      dispatch(setOrderList(ans));
      dispatch(setSelectedDetails(ans[2]));

      console.log(ans);
    };
    gettingData();
  }, []);

  return (
    <MainLayout>
      <div className="w-full px-5 bg-white">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-2xl font-semibold py-3">Orders</h1>
            <p className="text-slate-400 text-sm ">
              Manage all your orders here.
            </p>
          </div>
          <div>
            <CustomBtn name={"View Drafts"} iconName={"pi-pencil"} />
            <CustomBtn name={"Export CSV"} iconName={"pi-download"} />
            <CustomBtn name={"Create new order"} iconName={"pi-plus"} />
          </div>
        </div>

        <div className="w-full flex ">
          {/* left side of data */}
          <div className="w-[23%] ">
            <div
              className={`flex flex-row border border-slate-300 items-center w-full rounded-md my-6`}
            >
              <i className="pi pi-search px-2 text-gray-400"></i>
              <input
                type="text"
                className={`py-2 pl-[0.5rem] pr-[3rem]  placeholder:!text-gray-400 focus:hidden`}
                placeholder="order ID"
              />
            </div>

            <div className="border border-slate-300 rounded-md">
              <h1 className="p-3 border-b border-slate-300 font-semibold">
                Orders
                <span className="text-[0.6rem] p-1 mb-2 text-blue-500 bg-slate-100 rounded-full">
                  {orderList.length}
                </span>
              </h1>
              <p className="px-2 py-2 text-slate-400 border-b border-slate-300 text-xs">
                Name <i className="pi pi-arrow-down text-xs"></i>
              </p>
              {orderList.map((item, index) => (
                <CustomOrderCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* right side of data */}

          <div className=" w-full ml-5">
            {/* dropdowns   */}
            <div className={`flex items-center w-full my-6 `}>
              <CustomDropDown
                value={""}
                //   onChange={(e) => setSelectedCity(e.value)}
                options={[]}
                placeholder="Filter by Domicile"
              />
              <CustomDropDown
                value={""}
                //   onChange={(e) => setSelectedCity(e.value)}
                options={[]}
                placeholder="Filter by Company"
                className="ml-3"
              />
              <CustomDropDown
                value={""}
                //   onChange={(e) => setSelectedCity(e.value)}
                options={[]}
                placeholder="Filter by Status"
                className="ml-3"
              />

              <CustomBtn
                name={"Filter"}
                //   iconName={""}
                btnClass={"!p-3"}
                iconClass={"hidden"}
              />
              <CustomBtn
                name={"Clear Filter"}
                //   iconName={"hidden"}
                btnClass={"!p-3"}
                iconClass={"hidden"}
              />
            </div>
            {/* first box of right side   */}
            <div className="border border-slate-300 rounded-md p-3 flex justify-between items-center ">
              <div>
                <h1 className="font-semibold text-xl">
                  #{selectedOrderDetails?.orderId}
                  <CustomOrderStatus status={selectedOrderDetails?.status} />
                </h1>
                <p className="text-sm text-slate-400 font-medium">
                  {selectedOrderDetails.companyName}
                </p>
              </div>
              <div>
                <CustomBtn name={"Print"} iconName={"pi-print"} />
                <CustomBtn name={"Save as PDF"} iconName={"pi-download"} />
              </div>
            </div>
            {/* second box of right side  */}
            <div className="my-3  flex py-2">
              <div className="border border-slate-300 rounded-md p-3 grid grid-cols-4 grid-rows-2 gap-4 w-full">
                <CustomDetailDisplay
                  lable={"Placed By"}
                  value={selectedOrderDetails.customerName}
                />
                <CustomDetailDisplay
                  lable={"Requester"}
                  value={selectedOrderDetails.Requter}
                />
                <CustomDetailDisplay
                  lable={"PO/External ID"}
                  value={selectedOrderDetails.externalId}
                />
                <CustomDetailDisplay
                  lable={"Requester Email ID"}
                  value={selectedOrderDetails.requesterEmail}
                />
                <CustomDetailDisplay
                  lable={"Order Date"}
                  value={selectedOrderDetails.orderDate}
                />
                <CustomDetailDisplay
                  lable={"Expacted Date"}
                  value={selectedOrderDetails.excpatedDate}
                />
                <CustomDetailDisplay
                  lable={"Completion Date"}
                  value={selectedOrderDetails.complaitionDate}
                />
                <CustomDetailDisplay
                  lable={"Service Level"}
                  value={selectedOrderDetails.service}
                />
              </div>

              <div className="w-[45%] ">
                <CustomCard
                  imgSrc={him}
                  NameHeading={"Yash Palkar"}
                  cardStatus={"primary"}
                  phoneNo={"8764676570"}
                  email={"hr@gmail.com"}
                  description={"somthing want write"}
                />
              </div>
            </div>

            <div className="my-2 text-sm font-medium text-slate-400 border-b border-gray-300 px-3">
              <ul className="flex">
                {orderDetailList.map((i, index) => (
                  <li
                    className={`py-3 mx-3 cursor-pointer ${
                      orderDetailListChange == i.name &&
                      "border-b-4 border-blue-500 text-blue-500"
                    }`}
                    key={index}
                    onClick={() => setOrderDetailListChange(i.name)}
                  >
                    {i.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* receipt box  */}

            <div className="text-sm my-3 flex p-5  border border-slate-300 rounded-md">
              <div className="w-full border border-slate-300 rounded-md">
                <h4 className="text-blue-600 font-medium p-3 bg-blue-200">
                  Receipt
                </h4>
                <div className="p-3 border-b border-slate-300">
                  <div className="flex justify-between items-center  font-medium">
                    <h4 className="">State Filling</h4>
                    <p>$240</p>
                  </div>
                  <ul className="list-disc text-slate-400 font-medium mt-2 px-4">
                    <li>
                      The Filling free for the application as per the state
                      selected
                    </li>
                    <li>Government free</li>
                  </ul>
                </div>
                <div className="p-3 border-b border-slate-300">
                  <div className="flex justify-between items-center  font-medium">
                    <h4 className="">ragis</h4>
                    <p>$99</p>
                  </div>
                  <ul className="list-disc text-slate-400 font-medium mt-2 px-4">
                    <li>
                      The Filling free for the application as per the state
                      selected
                    </li>
                    <li>Government free</li>
                  </ul>
                </div>
              </div>
              <div className="mx-4 w-full border border-slate-300 rounded-md">
                <h4 className="text-blue-600 font-medium p-3 bg-blue-200">
                  Order history
                </h4>
                <div className="p-3 ">
                  <div className="flex items-center  font-medium">
                    <i
                      className="pi pi-check-circle text-green-300"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <div className="px-3">
                      <h4>Order created</h4>
                      <p>Processed By Customer_Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Orders;
