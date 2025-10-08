import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Stats = ({ appsDetails }) => {
  let data = [];

  if (appsDetails && appsDetails.ratings) {
    data = appsDetails.ratings;
  }

  data = data.slice().reverse();

  return (
    <div className="my-8">
      <h3 className="text-[24px] font-bold mb-5 text-center lg:text-left mx-4">
        Rating
      </h3>
      <div className="flex justify-center h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
