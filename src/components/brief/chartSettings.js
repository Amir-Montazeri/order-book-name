const settings = {
  chart: {
    type: 'spline',
    renderTo: 'chart',
    backgroundColor: 'transparent',
    height: 210,
    scrollablePlotArea: {
      minWidth: 190,
      scrollPositionX: 1
    }
  },
  title: {
    text: ''
  },
  xAxis: {
    visible: false
  },
  yAxis: {
    visible: true,
    gridLineWidth: 0,
    lineWidth: 2,
    title: {
      text: ''
    }
  },
  tooltip: {
    valueSuffix: ' m/s'
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5
        }
      },
      marker: {
        enabled: false
      },
    }
  },
  series: [{
    name: 'Hestavollane',
    data: [
      1.2, 1.3, 1.7, 1.7, 1.5, 1.52, 1.54, 1.56, 1.6
    ],
    color: 'lightgreen'
  }, {
    name: 'Vik',
    data: [
      1.0, 1.05, 1.1, 1.1, 1.05, 1.0, 1.01, 1.0, 1.0
    ],
    color: 'blue'
    }],
  navigation: {
    menuItemStyle: {
      fontSize: '10px'
    }
  }
}

export default settings;