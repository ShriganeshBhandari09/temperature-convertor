function converter() {
  let temp = document.getElementById("temp").value;
  let temptype = document.getElementById("temptype").value;
  if (temptype == "celsius") {
    var cel = (temp - 32) * (5 / 9);
    document.getElementById(
      "converted_to_far"
    ).innerHTML = `Celsius value is ${cel} C.`;
  } else if (temptype == "fahrenheit") {
    var far = temp * (9 / 5) + 32;
    document.getElementById(
      "converted_to_cel"
    ).innerHTML = `Fahrenheit value is ${far} F.`;
  } else {
    document.getElementById("converted_value").innerHTML = Invalid;
  }

  return false;
}
