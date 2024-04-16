import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  return (
    <>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <Bar />
    </>
  );
};

export default BarChart;
