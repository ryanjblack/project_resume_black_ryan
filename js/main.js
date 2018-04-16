// Top Graph

var doughnut = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                20,
                20,
                20,
                20,
                20,
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Illustrator',
            'Photoshop',
            'InDesign',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

// Bottom Graph

var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true
    }
};

// Loading Up the Graphs

window.onload = function () {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx, doughnut);
    var ctx2 = document.getElementById('chart-area2').getContext('2d');
    window.myPie = new Chart(ctx2, config);
};
