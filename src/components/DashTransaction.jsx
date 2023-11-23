import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { auth } from "../firebase.init";

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
        fetch(`https://patagonia-explore-server.vercel.app/api/user/${auth.currentUser?.email}`, {
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
        fetch("https://patagonia-explore-server.vercel.app/api/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setOrders(data));
    } else {
        fetch(`https://patagonia-explore-server.vercel.app/api/order/${auth.currentUser?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setOrders(data));
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
                    {orders && orders?.map((order, index) => (
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
                            <td className="p-4">
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    Edit
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
