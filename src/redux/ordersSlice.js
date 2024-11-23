import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        orderList: [],
        selectedOrderDetails:
        {
            orderId: "",
            companyName: "",
            status: "",
            customerName: "",
            Requter: "",
            externalId: "",
            requesterEmail: "",
            orderDate: "",
            excpatedDate: "",
            complaitionDate: "",
            service: "",

        }
    },
    reducers: {
        setOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setSelectedDetails: (state, action) => {
            state.selectedOrderDetails = action.payload
        },
    }
})

export const { setOrderList, setSelectedDetails } = ordersSlice.actions

export default ordersSlice.reducer;