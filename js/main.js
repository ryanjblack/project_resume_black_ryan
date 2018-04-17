// Set Chart Font Properties

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontFamily = 'Open Sans';

// Top Graph

var doughnut = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                50,
                15,
                15,
                20,
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'InDesign',
            'Illustrator',
            'Audition',
            'Photoshop'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Adobe CC'
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
                38,
                22,
                10,
                20,
            ],
            backgroundColor: [
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.red,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Writing',
            'Copy Editing',
            'Wordpress Dev',
            'Yoast',
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'SEO copywriting'
        }
    }
};

// Loading Up the Graphs

window.onload = function () {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx, doughnut);
    var ctx2 = document.getElementById('chart-area2').getContext('2d');
    window.myPie = new Chart(ctx2, config);
};
