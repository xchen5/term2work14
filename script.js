var revenue2008 = [911, 308, 68.1, 108, 1160];
var revenue2016 = [986, 262, 86.7, 195, 1460];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(revenue2008);
var barEnter = barUpdate.enter().append("div");
