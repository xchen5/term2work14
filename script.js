var revenue2008 = [911, 308, 68.1, 108, 1160];
var revenue2016 = [986, 262, 86.7, 195, 1460];
var chart = d3.select(".chart");
var chartDiv = document.getElementsByClassName("chart")[0];
var bar = chart.selectAll("div");
var toggle = 2016;
var year = document.getElementById("year");
var button = document.getElementById("toggle");

var changeYear = function(){
  if(toggle === 2008){
    chartDiv.innerHTML = '';
    barUpdate = bar.data(revenue2008);
    barEnter = barUpdate.enter().append("div");
    barEnter.transition().duration(2000).style("width", function(d) {
    return d * .5 + "px"; });
    barEnter.text(function(d) { return d; });
    year.innerHTML = '2008';
    toggle = 2016;
  }
  else{
    chartDiv.innerHTML = '';
    barUpdate = bar.data(revenue2016);
    barEnter = barUpdate.enter().append("div");
    barEnter.transition().duration(2000).style("width", function(d) {
    return d * .5 + "px"; });
    barEnter.text(function(d) { return d; });
    year.innerHTML = '2016';
    toggle = 2008;
  }
}

button.addEventListener("click", changeYear);

changeYear();
