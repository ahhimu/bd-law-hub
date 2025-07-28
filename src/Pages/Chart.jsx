import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from 'recharts';


const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="green" fill={fill} />;
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28', '#0088FE'];

const Chart = ({ booked }) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={booked}>
        
          <CartesianGrid vertical={false} strokeDasharray="5 5" />

          <XAxis dataKey="name" />
          <YAxis
            tickCount={6}
            domain={[0, 'dataMax + 500']}
            interval={0}
          />

          <Tooltip />

          <Bar dataKey="fee" shape={<TriangleBar />} name="Appointment Fee">
            {
              booked.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
