function fahrenheitToC(f) {
  if (f != "" && typeof f != "undefined") {
    let c = ((parseFloat(f) - 32) / 1.8).toFixed(2);
    document.getElementById("resultFtoC").innerHTML = c;
  } else {
    document.getElementById("resultFtoC").innerHTML = "";
  }
}
function cToFahrenheit(c) {
  if (c != "" && typeof c != "undefined") {
    let f = (parseFloat(c) * 1.8 + 32).toFixed(2);
    document.getElementById("resultCtoF").innerHTML = f;
  } else {
    document.getElementById("resultCtoF").innerHTML = "";
  }
}
