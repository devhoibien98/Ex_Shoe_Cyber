import React from "react";

export default function Cart({
  dataCart,
  handleRemoveFromCart,
  handleIncrease,
}) {
  let renderTbody = () => {
    return dataCart.map((item) => {
      return (
        <tr key={item.id} className="fw-bold">
          <td>{item.name}</td>
          <td>
            <img src={item.image} width="100" />
          </td>
          <td>{item.price}</td>
          <td>
            <button className="btn btn-primary">-</button>
            <span className="mx-5">{item.total}</span>
            <button
              onClick={() => {
                handleIncrease(item.id);
              }}
              className="btn btn-primary"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>

            <th>Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTbody()}</tbody>
      </table>
    </div>
  );
}
