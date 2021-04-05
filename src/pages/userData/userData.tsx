import React, { useState, useEffect } from "react";
//Components
import "./userData.scss";
import Layout from "../../container/ui/layout/Layout";
import Piechart from './PieChart';
import axios from "axios";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserData: React.FC = () => {
  let [symbol, setSymbol] = useState<any>([{ symbolIsReady: false }]);
  let [annualEarnings, setAnnualEarnings] = useState<any>([
    { annualEraningsIsReady: false },
  ]);
  const [pieChart, setPieChart] = useState<{}[] | boolean>(false);

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=demo"
      )
      .then((res) => {
        setSymbol([{ symbolIsReady: true }, { symbol: res.data.symbol }]);

        let arr: any = [];
        for (let i = 0; i < 15; i++) {
          let obj: any = {
            date: res.data.annualEarnings[i].fiscalDateEnding,
            value: Math.round(res.data.annualEarnings[i].reportedEPS),
          };
          arr.push(obj);
        }
        setAnnualEarnings(() => [{ annualEraningsIsReady: true }, arr]);
      });

    setTimeout(() => {
      let arr: {}[] = [];
      for (let i = 0; i < 4; i++) {
        arr.push({
          name: Math.random().toString(36).slice(-5),
          value: Math.floor(Math.random() * 50),
        });
      }
      setPieChart(arr);
    }, 200);
  }, []);

  let loader = <div className="loader"></div>;

  return (
    <div>
      <Layout isImage={false} color="black">
        <div id="data_container">
          <h1>
            {symbol[0].symbolIsReady ? "Data: " + symbol[1].symbol : "Data"}
          </h1>
          <button onClick={() => console.log(pieChart)}>sfsfsd</button>
          <div className="one">
            <div className="containerOne">
              {annualEarnings[0].annualEraningsIsReady ? (
                <div className="chart">
                  <h2>Annual ernings</h2>
                  <ResponsiveContainer>
                    <ComposedChart
                      width={800}
                      height={300}
                      data={annualEarnings[1]}
                      margin={{
                        top: 10,
                        right: 40,
                        bottom: 30,
                        left: 10,
                      }}
                    >
                      <XAxis dataKey="date" scale="band" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" barSize={30} fill="#413ea0" />
                      <Line type="monotone" dataKey="value" stroke="#ff7300" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                loader
              )}
            </div>
          </div>

          <div className="two">
            <div className="containerOne"></div>
            <div className="containerTwo">
              {pieChart ? <Piechart data={pieChart}/> : loader}
            </div>
          </div>

          <div className="three">
            <div className="containerOne"></div>
            <div className="containerTwo"></div>
            <div className="containerThree"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UserData;
