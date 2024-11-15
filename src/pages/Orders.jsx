// import  from "react";
import "primeicons/primeicons.css";
import CustomBtn from "../components/CustomBtn";
import { Dropdown } from "primereact/dropdown";
import { orders } from "../../data.json";
import him from "../assets/him.jpg";
import { useState } from "react";
import MainLayout from "../components/MainLayout";

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
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(orders[3]);
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
                Orders{" "}
                <span className="text-[0.6rem] p-1 mb-2 text-blue-500 bg-slate-100 rounded-full">
                  10
                </span>
              </h1>
              <p className="px-2 py-2 text-slate-400 border-b border-slate-300 text-xs">
                Name <i className="pi pi-arrow-down text-xs"></i>
              </p>
              {orders.map((item, index) => (
                <div
                  className={`p-3 border-b border-slate-100 flex items-center cursor-pointer justify-between ${
                    item.orderId == selectedOrderDetails.orderId &&
                    "bg-slate-100"
                  }`}
                  key={index}
                  onClick={() => setSelectedOrderDetails(item)}
                >
                  <div>
                    <h1 className="text-base font-semibold"> {item.orderId}</h1>
                    <p className="text-sm text-slate-400 font-medium">
                      {item.companyName}
                    </p>
                  </div>
                  <span
                    className={`text-[0.6rem] font-medium border border-green-500 rounded-lg px-1 ${
                      item.status == "Completed" &&
                      "border border-green-300 bg-green-50 text-green-500"
                    } ${
                      item.status === "Apporoval Pending" &&
                      "border border-yellow-300 bg-yellow-50 text-yellow-600"
                    } ${
                      item.status === "In Progress" &&
                      "border border-green-300 bg-green-50 text-green-500"
                    } ${
                      item.status === "Draft" &&
                      "bg-slate-50 border border-slate-300"
                    }
                    ${
                      item.status === "Review" &&
                      "border border-yellow-300 bg-yellow-50 text-yellow-600"
                    }
                    `}
                  >
                    {item.status}
                  </span>
                  <i className="pi pi-angle-right "></i>
                </div>
              ))}
            </div>
          </div>

          {/* right side of data */}

          <div className=" w-full ml-5">
            {/* dropdowns   */}
            <div className={`flex items-center w-full my-6 `}>
              <Dropdown
                value={""}
                //   onChange={(e) => setSelectedCity(e.value)}
                options={[]}
                optionLabel="name"
                placeholder="Filter by Domicile"
                className="w-[20%] border border-slate-300  rounded-md p-2 !placeholder:text-slate-400"
              />
              <Dropdown
                value={""}
                //   onChange={(e) => setSelectedCity(e.value)}
                options={[]}
                optionLabel="name"
                placeholder="Filter by Company"
                className="w-[20%] border border-slate-300  rounded-md p-2 ml-3 placeholder:text-slate-400"
              />
              <Dropdown
                value={""}
                //   onChange={(e) => setSelectedCity(e.value)}
                options={[]}
                optionLabel="name"
                placeholder="Filter by Status"
                className="w-[20%] border border-slate-300  rounded-md p-2 ml-3 placeholder:text-slate-300"
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
                  #{selectedOrderDetails.orderId}
                  <span
                    className={`text-xs rounded-lg mx-3 px-1  ${
                      selectedOrderDetails.status == "Completed" &&
                      "border border-green-300 bg-green-50 text-green-500"
                    } ${
                      selectedOrderDetails.status === "Apporoval Pending" &&
                      "border border-yellow-300 bg-yellow-50 text-yellow-600"
                    } ${
                      selectedOrderDetails.status === "In Progress" &&
                      "border border-green-300 bg-green-50 text-green-500"
                    } ${
                      selectedOrderDetails.status === "Draft" &&
                      "bg-slate-50 border border-slate-300"
                    }
                    ${
                      selectedOrderDetails.status === "Review" &&
                      "border border-yellow-300 bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {selectedOrderDetails.status}
                  </span>
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
                <div>
                  <h3 className="text-sm font-medium py-1 ">Placed By</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.customerName}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">Requester</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.Requter}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">PO/External ID</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.excpatedDate}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">
                    Requester Email ID
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.requesterEmail}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">Order Date</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.orderDate}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">Expacted Date</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.excpatedDate}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">Completion Date</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.complaitionDate}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium py-1 ">Service Level</h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {selectedOrderDetails.service}
                  </p>
                </div>
              </div>

              <div className="border border-slate-300 w-[40%] rounded-md ml-3 p-4">
                <div className="flex items-center py-3 border-b border-slate-200">
                  <img
                    src={him}
                    alt=""
                    className="w-8 h-9 rounded-full border-2 border-slate-300"
                  />
                  <div className="px-4">
                    <h1 className="text-sm font-semibold">Yash Palkar</h1>
                    <p className="text-xs  text-center w-fit rounded-full bg-green-100 text-green-500">
                      primary
                    </p>
                  </div>
                </div>

                <div className="text-sm font-medium text-slate-400 py-1">
                  <i className="pi pi-phone text-blue-500 mr-1"></i>{" "}
                  123123123312
                </div>
                <div className="text-sm font-medium text-slate-400 py-1">
                  <i className="pi pi-envelope text-blue-500 mr-1"></i>{" "}
                  hr@gmail.com
                </div>
                <div className="text-sm font-medium text-slate-400 py-1">
                  <i className="pi pi-map-marker text-blue-500 mr-1"></i>
                  somthing from sontjin
                </div>
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
