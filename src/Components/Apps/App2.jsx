import { ArrowDownToLine } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";

const App2 = ({ app }) => {
  return (
    <div className="card hover:shadow-xl cursor-pointer transition-all duration-300 bg-base-100 w-[348px] h-[435px] mx-auto shadow-sm p-4">
      <div>
        <img
          className="w-[316px] h-[316px] mx-auto rounded-[8px]"
          src={app.image}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center">
          <div>
            <div className="badge badge-soft badge-success font-bold">
              <ArrowDownToLine size={16} /> {app.downloads / 1000000}M
            </div>
          </div>
          <div className="badge badge-soft badge-warning font-bold">
            <FaStar /> {app.ratingAvg.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App2;
