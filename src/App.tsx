import React, { ReactNode } from 'react';
import './App.css';

const initialData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

function App() {
  const [data, setData] = React.useState(initialData);
  let offset: number = 0;

  const getAccumulate = (): number => {
    let acc: number = 0;
    data.forEach(el => {
      acc += el.time;
    });
    return +acc.toFixed(1);
  };

  const getChartWidth = (currVal: number, acc: any): number => {
    return (currVal * 100) / acc;
  };

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  function generateData() {
    setData([
      { name: 'Landing Page', time: +getRandomArbitrary(0, 10).toFixed(1) },
      { name: 'Configurator', time: +getRandomArbitrary(0, 10).toFixed(1) },
      { name: 'Check-out', time: +getRandomArbitrary(0, 10).toFixed(1) },
      { name: 'Deal', time: +getRandomArbitrary(0, 10).toFixed(1) },
    ]);
  }

  React.useEffect(() => {
    const intervalId = setInterval(generateData, 31800);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="container">
      <h1 className="title">Spent time (seconds)</h1>
      <ul className="chart">
        {React.Children.toArray(
          data.map(function (el): ReactNode {
            const style = {
              width: getChartWidth(el.time, getAccumulate()).toFixed(1) + '%',
              left: getChartWidth(offset, getAccumulate()).toFixed(1) + '%',
            };
            offset = +offset.toFixed(1) + el.time;
            return (
              <li key={el.name}>
                <p>{el.name}</p>
                <div className="bar">
                  <span className="progress" style={style}>
                    <span className="value">{el.time}</span>
                  </span>
                </div>
              </li>
            );
          })
        )}
      </ul>

      <button className="btn" onClick={generateData}>
        Generate data
      </button>
    </div>
  );
}

export default App;
