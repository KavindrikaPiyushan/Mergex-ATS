import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PiechartWithIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70, 30], // Update series to display only two data points
      options: {
        chart: {
          width: 300,
          type: 'donut',
        },
        
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            donut: {
              size: '85%', // Adjust the inner radius to change thickness
              labels: {
                show: true, // Show the labels
                name: {
                  fontSize: '16px', // Set the font size for the name
                  offsetY: 20, // Adjust the vertical position of the name
                  formatter: function(val) { // Customize the format of the name
                    return val;
                  }
                },
                value: {
                  fontSize: '14px', // Set the font size for the value
                  offsetY: -20, // Adjust the vertical position of the value
                  formatter: function(val) { // Customize the format of the value
                    return val + '%';
                  }
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        colors: ['#EA7122', '#ffffff'], // Set path colors
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        title: {},
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        // Add annotations for displaying text in the center of the donut chart
        annotations: {
          // Use the center annotation to display the percentage value
          center: {
            // Set the text content to display the percentage
            text: '70%',
            // Define the style for the text
            style: {
              fontSize: '24px',
              color: '#ffffff', // Set text color to white
            }
          },
          // Add a new annotation for additional text
          additionalText: {
            // Set the text content
            text: 'Additional text here',
            // Define the style for the text
            style: {
              fontSize: '16px',
              color: '#000000', // Set text color to black
            },
            // Specify the position of the annotation
            // You can adjust the x and y values as needed
            // 'left' and 'bottom' are just placeholders here
            position: 'left',
            offsetY: -50 // Adjust the vertical position of the text
          }
        }
      },
    };
  }

  render() {
    return (
      <div style={{ width: '200px' }}> {/* Adjust the width of the chart container */}
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
        </div>
        <div id="html-dist"></div>

        <style>
          {`
          .apexcharts-pie-area {
            stroke-width: 1px; /* Reduce the width of the path */
          }
          .apx-legend-position-right {
            display: none;
          }
          .apexcharts-tooltip-series-group{
            color:black !important;
          }
          .apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value, .apexcharts-datalabels, .apexcharts-pie-label{
            color:white !important;
            opacity:100% !important;
          }
          .apexcharts-datalabel-value {
              fill: #ffffff !important; /* Set text color to white */
              opacity: 1 !important; /* Make text fully opaque */
          }
          .apexcharts-datalabels-group{
            display:block;
          }
          `}
        </style>
      </div>
    );
  }
}

export default PiechartWithIcon;
