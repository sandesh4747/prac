import React, { useState } from "react";
import { useGetAllUsersQuery } from "./userApi";
import RemoveUser from "./RemoveUser";

export default function UserList() {
  const { isLoading, error, data } = useGetAllUsersQuery();
  const [selectId, setSelectId] = useState(null);

  const handleSelectId = (id) => {
    setSelectId((prev) => (prev === id ? null : id));
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error.message}</div>;

  console.log(data);
  return (
    <div className="p-4">
      {data &&
        data.map((dataItem) => (
          <div className="flex justify-between" key={dataItem.id}>
            <div
              key={dataItem.id}
              onClick={() => handleSelectId(dataItem.id)}
              className="mb-2 p-2 border rounded cursor-pointer flex-1  "
            >
              <h3 className="font-bold">{dataItem.name}</h3>

              {selectId === dataItem.id && (
                <div className="mt-2 text-sm">
                  <p>Website: {dataItem.website}</p>
                  <p>Email: {dataItem.email}</p>
                  <p>Username: {dataItem.username}</p>
                  <p>
                    Address: {dataItem.address.street}, {dataItem.address.suite}
                    , {dataItem.address.zipcode}
                  </p>
                  <p>Phone: {dataItem.phone}</p>
                  <p>
                    Company:{dataItem.company.name},
                    {dataItem.company.catchPhrase},{dataItem.company.bs}
                  </p>
                </div>
              )}
            </div>
            <div className="ml-4">
              <RemoveUser id={dataItem.id} />
            </div>
          </div>
        ))}
    </div>
  );
}
