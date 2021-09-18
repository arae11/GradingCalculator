function process() {

    var modules = ["COMP7001", "COMP7002", "TECH7005", "DALT7002", "SOFT7003", "TECH7004", "TECH7009"];
    var moduleMarks = [];

    modules.forEach(module => {
        moduleMarks.push(parseFloat(document.getElementById(module).value))
    });

    var total = moduleMarks.reduce(function(a, b){
        return a + b;
    }, 0);

      var COMP7001int = parseFloat(document.getElementById('COMP7001').value);
      var credit1 = parseFloat(modCredit(COMP7001int));
      document.getElementById("letterGrade1").innerHTML = getmygrade(COMP7001int);
      document.getElementById("credits1").innerHTML = credit1;

      var COMP7002int = parseFloat(document.getElementById('COMP7002').value);
      var credit2 = parseFloat(modCredit(COMP7002int));
      document.getElementById("letterGrade2").innerHTML = getmygrade(COMP7002int);
      document.getElementById("credits2").innerHTML = credit2;

      var TECH7005int = parseFloat(document.getElementById('TECH7005').value);
      var credit3 = parseFloat(modCredit(TECH7005int));
      document.getElementById("letterGrade3").innerHTML = getmygrade(TECH7005int);
      document.getElementById("credits3").innerHTML = credit3;

      var DALT7002int = parseFloat(document.getElementById('DALT7002').value);
      var credit4 = parseFloat(modCredit(DALT7002int));
      document.getElementById("letterGrade4").innerHTML = getmygrade(DALT7002int);
      document.getElementById("credits4").innerHTML = credit4;

      var SOFT7003int = parseFloat(document.getElementById('SOFT7003').value);
      var credit5 = parseFloat(modCredit(SOFT7003int));
      document.getElementById("letterGrade5").innerHTML = getmygrade(SOFT7003int);
      document.getElementById("credits5").innerHTML = credit5;

      var TECH7004int = parseFloat(document.getElementById('TECH7004').value);
      var credit6 = parseFloat(modCredit(TECH7004int));
      document.getElementById("letterGrade6").innerHTML = getmygrade(TECH7004int);
      document.getElementById("credits6").innerHTML = credit6;

      var TECH7009int = parseFloat(document.getElementById('TECH7009').value);
      var credit7 = parseFloat(modCredit(TECH7009int));
      document.getElementById("letterGrade7").innerHTML = getmygrade(TECH7009int);
      document.getElementById("credits7").innerHTML = credit7;
/*
      var total1 = parseFloat(COMP7001int);
      var total2 = parseFloat(COMP7002int);
      var total3 = parseFloat(TECH7005int);
      var total4 = parseFloat(DALT7002int);
      var total5 = parseFloat(SOFT7003int);
      var total6 = parseFloat(TECH7004int);
      var total7 = parseFloat(TECH7009int);
      var total = total1 + total2 + total3 + total4 + total5 + total6 + total7;*/
      var percentage = total / 7;
      var totalCred = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7;

      var display = document.getElementById('outputMessage');
      var display2 = document.getElementById('outputMessage2');

      document.getElementById('outputMessage').innerHTML = "You have achieved a percentage of " + percentage.toFixed(2) + "%, giving you an average grade of " + getmygrade(percentage) + "."
      document.getElementById('outputMessage2').innerHTML = "This gives you " + totalCred + " total credits and overall, " + reward(totalCred)
}

  function getmygrade(number) {
      var letterGrade = "F";
      switch (true) {
          case (number < 0 || number > 100):
              letterGrade = "Invalid";
              break;
          case (number >= 0 && number <= 49):
              letterGrade = "F";
              break;
          case (number >= 50 && number <= 59):
              letterGrade = "C";
              break;
          case (number >= 60 && number <= 69):
              letterGrade = "B";
              break;
          case (number >= 70 && number <= 100):
              letterGrade = "A";
              break;
          default:
              alert("Please enter a valid number");
              break;
      }
      return letterGrade;
  }

  function modCredit(number) {
      var credits = "0";
      switch (true) {
          case (number <= 49 && number >= 0):
              credits = "0";
              break;
          case (number >= 50 && number <= 100):
              credits = "20";
              break;
          default:
              alert("Please enter a valid number");
              break;
      }
      return credits;
  }

  function modCredit(number) {
      var credits = "0";
      switch (true) {
          case (number <= 49 && number >= 0):
              credits = "0";
              break;
          case (number >= 50 && number <= 100):
              credits = "60";
              break;
          default:
              alert("Please enter a valid number");
              break;
      }
      return credits;
  }

  function reward(totalCred) {
    var reward = "0";
    if (totalCred == 180)
        reward = "you have achieved an MSc in Computing Science";
    else if (totalCred < 180 && totalCred >= 120)
        reward = "you have achieved a Postgraduate Diploma in Computing Science";
    else if (totalCred < 120 && totalCred >= 60)
        reward = "you have achieved a Postgraduate Certificate in Computing Science";
    else
        reward = " you have failed";

    return reward;
  }
