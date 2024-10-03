import React from "react";

export default function List(props) {
  console.log("props:", props);
  let { dataShoe, handleRemoveFromList, handleAddToCart } = props;
  let renderList = () => {
    // image, name,button add
    return dataShoe.map((shoe, index) => {
      return (
        <div key={index} className="col-3">
          <img className="w-100" src={shoe.image} />
          <button
            onClick={() => {
              handleRemoveFromList(shoe.id);
            }}
            className="btn btn-dark"
          >
            Delete
          </button>
          <button
            onClick={() => {
              handleAddToCart(shoe);
            }}
            className="btn btn-danger"
          >
            Add
          </button>
        </div>
      );
    });
  };
  return <div className="row col-5">{renderList()}</div>;
}
