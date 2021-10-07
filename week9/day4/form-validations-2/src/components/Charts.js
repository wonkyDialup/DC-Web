import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Pain', 'Pain but Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => (
    <>
        <div>
            <Doughnut data={data} />
        </div>
    
    </>
);

export default Chart;