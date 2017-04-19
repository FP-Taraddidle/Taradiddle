import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import react-fusioncharts from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

var chartConfigs = {
    type: "Column2D",
    className: "fc-column2d", // ReactJS attribute-name for DOM classes
    dataFormat: "JSON",
    dataSource: {
        chart:{},
        data: [{value: 500}, {value: 600}, {value: 700}]
    }
};

class UserChart extends Component {

  constructor(props) {
        super(props)
  }
  

  render() {
    return <div id='chart-container'></div>
  }
}

export default UserChart;

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('chart-container')
);