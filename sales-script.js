let showData1 = true;
let showData2 = true;

const toggleDataButton = document.getElementById('toggleData');
toggleDataButton.addEventListener('click', () => {
  showData1 = !showData1;
  showData2 = !showData2;
  updateChart();
});

const data = {
  labels: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'],
  datasets: [
    {
      label: 'Shitjet mujore',
      data: [120, 190, 300, 500, 250, 400, 350, 280, 390, 450, 210, 320],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      hidden: !showData1
    },
    {
      label: 'Fitimi mujor',
      data: [50, 100, 200, 300, 150, 250, 180, 220, 320, 280, 150, 200],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hidden: !showData2
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Shitjet dhe fitimi mujor'
      },
      legend: {
        position: 'top'
      }
    }
  }
};

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, config);

function updateChart() {
  chart.update();
}

