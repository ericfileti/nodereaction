// import React, { Component } from "react";

// export default class MikeContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     // Load the Visualization API and the corechart package.
//     google.charts.load("current", { packages: ["corechart"] });

//     // Set a callback to run when the Google Visualization API is loaded.
//     google.charts.setOnLoadCallback(this.drawChart);
//   }

//   drawChart() {
//     // Create the data table.
//     var data = new google.visualization.DataTable();
//     data.addColumn("string", "Topping");
//     data.addColumn("number", "Slices");
//     data.addRows([
//       ["Mushrooms", 3],
//       ["Onions", 1],
//       ["Olives", 1],
//       ["Zucchini", 1],
//       ["Pepperoni", 2]
//     ]);

//     // Set chart options
//     var options = {
//       title: "How Much Pizza I Ate Last Night",
//       width: 400,
//       height: 300
//     };

//     // Instantiate and draw our chart, passing in some options.
//     var chart = new google.visualization.PieChart(
//       document.getElementById("chart_div")
//     );
//     chart.draw(data, options);
//   }

//   render() {
//     return <div id="chart_div" />;
//   }
// }
