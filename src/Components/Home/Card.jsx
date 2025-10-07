import React from "react";

const Card = ({ app }) => {
  return (
    <div className="card bg-base-100 w-[348px] h-[435px] mx-auto shadow-sm p-4">
      <div className="bg-gray-200 p-4 rounded-[8px]">
        <img
          className="w-[316px] h-[316px] mx-auto rounded-[8px]"
          src={app.image}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
      </div>
    </div>
  );
};

export default Card;
