var questionsNumber = 0;

function reset() {
  var elements = document.getElementsByClassName("mainText");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "";
  }
  document.getElementById("winTally").innerHTML = "0";
  document.getElementById("totalTally").innerHTML = "0";
  questionsNumber = 0;
}

function truefalseQuestion(question, correctAnswer, WrongAnswer) {
  const newdiv = document.createElement("div");
  newdiv.setAttribute("id", "newDiv");
  newdiv.innerHTML = question;
  let button_1 = document.createElement("button");
  button_1.classList.add("momo");
  const possibleAnswers = [correctAnswer, WrongAnswer];
  var randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  var randomElement = possibleAnswers.splice(randomIndex, 1)[0];
  button_1.textContent = randomElement;
  button_1.addEventListener("click", function () {
    if (button_1.textContent == correctAnswer) {
      var winTally = parseInt(document.getElementById("winTally").innerHTML);
      winTally = winTally + 1;
      document.getElementById("winTally").innerHTML = winTally;
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
      // questionsNumber = questionsNumber + 1
      // return questionsNumber
    } else {
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
    }
  });
  let button_2 = document.createElement("button");
  button_2.classList.add("momo");
  var randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  var randomElement = possibleAnswers.splice(randomIndex, 1)[0];
  button_2.textContent = randomElement;
  button_2.addEventListener("click", function () {
    if (button_2.textContent == correctAnswer) {
      var winTally = parseInt(document.getElementById("winTally").innerHTML);
      winTally = winTally + 1;
      document.getElementById("winTally").innerHTML = winTally;
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();

      // return questionsNumber
    } else {
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
    }
  });
  newdiv.appendChild(button_1);
  newdiv.appendChild(button_2);
  papa = document.getElementById("questionHub");
  papa.appendChild(newdiv);
}
function MCQ(
  question,
  correctAnswer,
  WrongAnswer1,
  WrongAnswer2,
  WrongAnswer3
) {
  const newdiv = document.createElement("div");
  newdiv.setAttribute("id", "newDiv");
  newdiv.innerHTML = question;
  let button_1 = document.createElement("button");
  button_1.classList.add("momo");
  const possibleAnswers = [
    correctAnswer,
    WrongAnswer1,
    WrongAnswer2,
    WrongAnswer3,
  ];
  var randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  var randomElement = possibleAnswers.splice(randomIndex, 1)[0];
  button_1.textContent = randomElement;
  button_1.addEventListener("click", function () {
    if (button_1.textContent == correctAnswer) {
      var winTally = parseInt(document.getElementById("winTally").innerHTML);
      winTally = winTally + 1;
      document.getElementById("winTally").innerHTML = winTally;
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
      // questionsNumber = questionsNumber + 1
      // return questionsNumber
    } else {
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
    }
  });
  let button_2 = document.createElement("button");
  button_2.classList.add("momo");
  var randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  var randomElement = possibleAnswers.splice(randomIndex, 1)[0];
  button_2.textContent = randomElement;
  button_2.addEventListener("click", function () {
    if (button_2.textContent == correctAnswer) {
      var winTally = parseInt(document.getElementById("winTally").innerHTML);
      winTally = winTally + 1;
      document.getElementById("winTally").innerHTML = winTally;
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
      // questionsNumber = questionsNumber + 1
      // return questionsNumber
    } else {
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
    }
  });
  let button_3 = document.createElement("button");
  button_3.classList.add("momo");
  var randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  var randomElement = possibleAnswers.splice(randomIndex, 1)[0];
  button_3.textContent = randomElement;
  button_3.addEventListener("click", function () {
    if (button_3.textContent == correctAnswer) {
      var winTally = parseInt(document.getElementById("winTally").innerHTML);
      winTally = winTally + 1;
      document.getElementById("winTally").innerHTML = winTally;
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
      // questionsNumber = questionsNumber + 1
      // return questionsNumber
    } else {
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
    }
  });
  let button_4 = document.createElement("button");
  button_4.classList.add("momo");
  var randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  var randomElement = possibleAnswers.splice(randomIndex, 1)[0];
  button_4.textContent = randomElement;
  button_4.addEventListener("click", function () {
    if (button_4.textContent == correctAnswer) {
      var winTally = parseInt(document.getElementById("winTally").innerHTML);
      winTally = winTally + 1;
      document.getElementById("winTally").innerHTML = winTally;
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
      // questionsNumber = questionsNumber + 1
      // return questionsNumber
    } else {
      var totalTally = parseInt(
        document.getElementById("totalTally").innerHTML
      );
      totalTally = totalTally + 1;
      document.getElementById("totalTally").innerHTML = totalTally;
      newdiv.remove();
    }
  });
  newdiv.appendChild(button_1);
  newdiv.appendChild(button_2);
  newdiv.appendChild(button_3);
  newdiv.appendChild(button_4);
  papa = document.getElementById("questionHub");
  papa.appendChild(newdiv);
}

//First I will take a JSON string and convert it to a JSON object
function callQuestions(questionsNumber) {
  fetch("https://opentdb.com/api.php?amount=10")
    .then((Response) => Response.json())
    .then((data) => {
      if (data["results"][questionsNumber]["type"] == "boolean") {
        truefalseQuestion(
          data["results"][questionsNumber]["question"],
          data["results"][questionsNumber]["correct_answer"],
          data["results"][questionsNumber]["incorrect_answers"][0]
        );
      } else {
        MCQ(
          data["results"][questionsNumber]["question"],
          data["results"][questionsNumber]["correct_answer"],
          data["results"][questionsNumber]["incorrect_answers"][0],
          data["results"][questionsNumber]["incorrect_answers"][1],
          data["results"][questionsNumber]["incorrect_answers"][2]
        );
      }
    })
    .catch((error) => {
      console.error("Error fetching questions", error);
    });
  questionsNumber++;
}

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("addQuestion").addEventListener("click", function () {
  callQuestions(questionsNumber);
});
