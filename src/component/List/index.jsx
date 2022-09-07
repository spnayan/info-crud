import React from "react";

const List = ({ users }) => {
  return (
    <table className="">
      <thead className="bg-white border-b">
        <tr>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            ID
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Name
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Address
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Email
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Gender
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Academic Level
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Edit
          </th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="bg-gray-100 border-b ">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {user.id}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.address}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.email}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.gender}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.academics.map((a, index) => (
                <p key={index}>{a.level}</p>
              ))}
            </td>
            <td>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Edit
              </button>
            </td>
            <td>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
