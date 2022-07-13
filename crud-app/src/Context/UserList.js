import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export const UserList = () => {
  const { employees } = useContext(GlobalContext);
  return (
    <div>
      {employees.length > 0 ? (
        <div>
          {employees.map((employee) => (
            <p>{employee.name}</p>
            // <div
            //   className="flex items-center bg-gray-100 mb-10 shadow"
            //   key={employee.id}
            // >
            //   <div className="flex-auto text-left px-4 py-2 m-2">
            //     <p className="text-gray-900 leading-none">
            //       {employee.name}
            //     </p>
            //     <p className="text-gray-600">
            //       {employee.designation}
            //     </p>
            //     <span className="inline-block text-sm font-semibold mt-1">
            //       {employee.location}
            //     </span>
            //   </div>
            // </div>
          ))}
        </div>
      ) : (
        <p>No data.</p>
      )}
    </div>
  );
};
