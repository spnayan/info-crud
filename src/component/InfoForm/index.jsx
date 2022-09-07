import React, { useState } from "react";

const InfoForm = ({
  handleChange,
  handleSubmit,
  state,
  handleAcademics,
  academic,
  handleAdd,
}) => {
  return (
    <div className="w-full max-w-sm">
      <h1>User Info</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={state.address}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <input
            type="radio"
            name="gender"
            placeholder="Gender"
            checked={state.gender === "male"}
            onChange={handleChange}
            value="male"
          />
          Male
          <input
            type="radio"
            name="gender"
            placeholder="Gender"
            checked={state.gender === "female"}
            onChange={handleChange}
            value="female"
          />
          Female
        </div>
        <div className="mb-4 border p-5">
          <h6>Academic Information</h6>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="level"
            placeholder="Level"
            value={academic.level}
            onChange={handleAcademics}
          />
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="percentage"
            placeholder="Percentage"
            onChange={handleAcademics}
            value={academic.percentage}
          />
          <button
            className="bg-gray-700 rounded px-4 py-2 text-white"
            onClick={handleAdd}
          >
            Add
          </button>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Level
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.academics.map((academic, index) => (
                  <tr key={index}>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {academic.level}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {academic.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
