import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";

const TABLE_HEAD = [
    "Name",
    "Email",
    "Service",
    "Price",
    "Status",
    "Peoples",
    "Date",
    "Comments",
    "Action",
];

export default function DashTransaction() {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/${auth.currentUser?.email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    if (user?.role === "admin") {
        fetch("http://localhost:5000/api/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setOrders(data));
    } else {
        fetch(`http://localhost:5000/api/order/${auth.currentUser?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }


    const handleRefund = (order) => {

        const UpdatedData = {
            orderId: order._id,
            refundStatus: 'refund'
        }

        fetch(`http://localhost:5000/api/orders/update-order`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
            body: JSON.stringify(UpdatedData)
        })
            .then((response) => response.json())
            .then((data) => {
                toast("Your request is accepted. Please wait...")
            });
    }

    const handleGiveRefund = (order) => {
        const UpdatedData = {
            orderId: order._id,
            refundStatus: 'refunded'
        }

        fetch(`http://localhost:5000/api/orders/update-order`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
            body: JSON.stringify(UpdatedData)
        })
            .then((response) => response.json())
            .then((data) => {
                toast("Fund is Refunded...")
            });
    }

    return (
        <Card className="h-full w-full overflow-scroll md:overflow-hidden">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD?.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders?.map((order, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order?.userInfo.name}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order?.userInfo.email}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order?.serviceInfo.title}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order.serviceInfo.price}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order.paymentInfo.status}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order.orderInfo.numberOfPeople}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order.orderInfo.date}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {order.orderInfo.comments}
                                </Typography>
                            </td>

                            {user?.role === 'user' ? (
                                user?.role === 'user' && order?.refundInfo?.status === 'completed' ?
                                    <td className="p-4">
                                        <button onClick={() => handleRefund(order)} className=" bg-blue-300 p-2 text-xs rounded-md">Make Refund</button>
                                    </td>
                                    :
                                    user?.role === 'user' && order?.refundInfo?.status === 'refund' ?
                                        <td className="p-4">
                                            <Typography
                                                as="a"
                                                href="#"
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium"
                                            >
                                                Refund Pending...
                                            </Typography>
                                        </td>
                                        :
                                        user?.role === 'user' && order?.refundInfo?.status === 'refunded' ?
                                            <td className="p-4">
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-medium"
                                                >
                                                    Payment Refunded
                                                </Typography>
                                            </td>
                                            :
                                            // Add a default case if none of the conditions match
                                            <td className="p-4">
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-medium"
                                                >
                                                    Default Text
                                                </Typography>
                                            </td>)
                                :
                                (
                                    user?.role === 'admin' && order?.refundInfo?.status === 'refund' ?
                                        <td className="p-4">
                                            <button onClick={() => handleGiveRefund(order)} className=" bg-blue-300 p-2 text-xs rounded-md">Give Refund</button>
                                        </td>
                                        :
                                        <td className="p-4">
                                            <Typography
                                                as="a"
                                                href="#"
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium"
                                            >
                                                completed
                                            </Typography>
                                        </td>

                                )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
