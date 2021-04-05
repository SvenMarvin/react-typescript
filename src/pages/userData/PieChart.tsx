import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#AC4B28", "#FF8042"];

const Piechart = (props: any) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={props.data} fill="#8884d8" label>
            
            {props.data.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
