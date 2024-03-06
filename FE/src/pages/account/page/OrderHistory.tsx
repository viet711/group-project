const OrderHistory = () => {
  return (
    <div className="flex">
      <div className="w-full">
        <h1 className="text-3xl normal-case font-semibold mb-5 mt-5 md:mt-0">Order History</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full max-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-5 border-2 border-sky-500">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Order Number
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Active
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  175525
                  <a href="" className="hover:underline text-blue-500">
                    View Details
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
