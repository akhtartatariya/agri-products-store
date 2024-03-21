import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { fireDB } from '../firebase/config';

const OrderHistoryAdmin = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const orderCollection = collection(fireDB, "orders");
                const orderSnapshot = await getDocs(orderCollection);
                const orders = orderSnapshot.docs.map((doc) => {
                    const orderData = doc.data();
                    const formattedTimestamp = new Date(orderData.timestamp.seconds * 1000).toLocaleString();
                    return {
                        id: doc.id,
                        contact: orderData.contact,
                        timestamp: formattedTimestamp,
                        // Add other order details as needed
                    };
                });
                setOrderHistory(orders);
            } catch (error) {
                console.error("Error fetching order history:", error);
            }
        };

        fetchOrderHistory();
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Customer Name
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Order Placed At
                        </th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {orderHistory.map((order) => (
                        <tr key={order.id}>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                                {order.id}
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                                {order.contact.name}
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                                {order.timestamp}
                            </td>
                            {/* Render other order details */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default OrderHistoryAdmin
