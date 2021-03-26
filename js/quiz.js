var submitAnswer = function () {
  var an1 = document.getElementsByName("no1");
  var an2 = document.getElementsByName("no2");
  var an3 = document.getElementsByName("no3");
  var an4 = document.getElementsByName("no4");
  var an5 = document.getElementsByName("no5");

  var val = "";
  var val1 = "";
  var val2 = "";
  var val3 = "";
  var val4 = "";
  var score = 0;

  for (var i = 0, length = an1.length; i < length; i++) {
    if (an1[i].checked) {
      val = an1[i].value;
      break;
    }
  }

  for (var i = 0, length = an2.length; i < length; i++) {
    if (an2[i].checked) {
      val1 = an2[i].value;
      break;
    }
  }

  for (var i = 0, length = an3.length; i < length; i++) {
    if (an3[i].checked) {
      val2 = an3[i].value;
      break;
    }
  }
  for (var i = 0, length = an4.length; i < length; i++) {
    if (an4[i].checked) {
      val3 = an4[i].value;
      break;
    }
  }
  for (var i = 0, length = an5.length; i < length; i++) {
    if (an5[i].checked) {
      val4 = an5[i].value;
      break;
    }
  }

  if (val == "" || val1 == "" || val2 == "" || val3 == "" || val4 == "") {
    alert("please select choice answer");
  }

  if (val == "China") {
    score += 20;
  }
  if (val1 == "sarscov") {
    score += 20;
  }
  if (val2 == "rapid") {
    score += 20;
  }
  if (val3 == "karantina") {
    score += 20;
  }
  if (val4 == "pemantauan") {
    score += 20;
  }

  alert("Nilai = " + score);
  window.location.reload();
};
