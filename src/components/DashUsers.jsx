import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = ["Name", "Email", "Phone", "Address", "Action"];

export default function DashUsers() {
    const [users, setUsers] = useState([]);

    fetch("https://server.patagoniaexplore.com/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("travel-token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => setUsers(data));

    return (
        <Card className="h-full w-full overflow-scroll md:overflow-hidden">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
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
                    {users.map(({ name, email, phone, address }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {name}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {email}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {phone}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {address}
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
