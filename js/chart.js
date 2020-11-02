// 1 - pop 2 - vvp
var datasets =[ 
{
    label: "Население " + CountryRod,
    backgroundColor: 'rgb(0, 0, 0, 0)',
    borderColor: 'rgb(231, 79, 91)',
    data: [10000, 20000,30000,10000,30002,123123, 123142],
},
{
    label: "ВВП " + CountryRod,
    backgroundColor: 'rgb(0, 0, 0, 0)',
    borderColor: 'rgb(231, 79, 91)',
    data: [10000, 20000,30000,10000,30002,123123, 123142],
},
{
    label: "Население " + CountryRod,
    backgroundColor: 'rgb(0, 0, 0, 0)',
    borderColor: 'rgb(231, 79, 91)',
    data: [10000, 20000,30000,10000,30002,123123, 123142],
},
{
    label: "Население " + CountryRod,
    backgroundColor: 'rgb(0, 0, 0, 0)',
    borderColor: 'rgb(231, 79, 91)',
    data: [10000, 20000,30000,10000,30002,123123, 123142],
},
];
function mchartg(id){
    document.getElementById("chart-container").innerHTML = "";
    var div = document.createElement('canvas');
    div.setAttribute('id', 'MainChart');

    document.getElementById("chart-container").appendChild(div);

    var chartCountryPop = document.getElementById("MainChart").getContext("2d");
    var MainChart = new Chart(chartCountryPop, {
        
        type: 'line',

        data: {
            labels: ['2014', '2015', '2016','2017', '2018', '2019', '2020'],

            datasets: [
                datasets[id - 1]
            ]
        }
    });

}

function btnListener(btn){ 
    mchartg(btn.name[1]);
}
mchartg(1);