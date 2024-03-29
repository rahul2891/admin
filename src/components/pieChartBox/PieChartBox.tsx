import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss"

const data = [
    { name: "Mobile", value: 400, color: "#1BFFFF" },
    { name: "Desktop", value: 300, color: "#D4145A" },
    { name: "Laptop", value: 300, color: "#FBB03B" },
    { name: "Tablet", value: 200, color: "#FCEE21" },
  ];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
        <h1>Leads By Source</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        </div>
        <div className="options">
            {data.map((item) => (
                <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{ backgroundColor: item.color }} />
                        <span>{item.name}</span>
                    <span>{item.value}</span>
                </div>
            </div>
            )) }
        </div>
    </div>
  )
}

export default PieChartBox