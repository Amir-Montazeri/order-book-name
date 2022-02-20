const settings = {
  credits: false,
  chart: {
    type: 'spline',
    renderTo: 'chart',
    backgroundColor: 'transparent',
    height: 180,
    margin: [20, 0, 10, 45],
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
  plotOptions: {
    spline: {
      lineWidth: 4,
      marker: {
        enabled: false
      },
    }
  },
  series: [{
    showInLegend: false,
    enableMouseTracking: false,
    data: [
      1.2, 1.3, 1.7, 1.7, 1.5, 1.52, 1.54, 1.56, 1.6
    ],
    color: 'lightgreen'
  }, {
    showInLegend: false,
    enableMouseTracking: false,
    data: [
      1.0, 1.05, 1.1, 1.1, 1.05, 1.0, 1.01, 1.0, 1.0
    ],
    color: 'blue'
  }],
};

export default settings;