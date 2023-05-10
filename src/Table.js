import React from "react";
import "./index.css";
const TableData = ({ getCharacter, removeData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Publisher Name</th>
          <th>Publisher Age</th>
          <th>Page Number</th>
          <th>Publish Date</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {getCharacter?.map((item, index) => (
          <tr key={index}>
            <td>{item?.name}</td>
            <td>{item?.publisherName} </td>
            <td>{item?.publisherAge}</td>
            <td>{item?.pageNumber}</td>
            <td>{item?.publishDate}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button
                onClick={() => {
                  removeData(index);
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
