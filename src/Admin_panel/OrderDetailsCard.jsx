import { useState } from 'react';

const OrderDetailsCard = () => {
  const [order, setOrder] = useState({
    id: '#12345',
    customerName: 'John Doe',
    email: 'john@example.com',
    deliveryAddress: '123 Main St, New York, NY 10001',
    items: [
      { product: 'Product 1', quantity: 2, price: 25 },
      { product: 'Product 2', quantity: 1, price: 50 },
    ],
    totalAmount: 100,
    orderDate: '2023-08-15',
    paymentStatus: 'paid',
    status: 'pending',
  });

  const statusOptions = [
    'pending',
    'processing',
    'shipped',
    'delivered',
    'cancelled',
  ];

  const handleStatusChange = (newStatus) => {
    setOrder(prev => ({ ...prev, status: newStatus }));
    // Add API call here to update status
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-indigo-100 text-indigo-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Order #{order.id}</h2>
          <p className="text-gray-600">Placed on {order.orderDate}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
          <select
            value={order.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statusOptions.map(option => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
          <div className="space-y-1">
            <p>{order.customerName}</p>
            <p className="text-blue-600">{order.email}</p>
            <p className="text-gray-600">{order.deliveryAddress}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
          <div className="space-y-1">
            <p>Total Amount: {order.totalAmount}</p>
            <p className={`font-medium ${
              order.paymentStatus === 'paid' ? 'text-green-600' : 'text-yellow-600'
            }`}>
              Payment Status: {order.paymentStatus}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Order Items</h3>
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded">
              <div>
                <p className="font-medium">{item.product}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="text-gray-700">{item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
