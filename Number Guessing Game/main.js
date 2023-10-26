const answer = Math.floor(Math.random() * 20 + 1);
let guesses = 0;

window.alert = function (message, timeout = null) {
  const alert = document.createElement("div");
  const alertButton = document.createElement("button");
  alertButton.innerText = "try again!";
  alert.classList.add("alert");
  alert.setAttribute(
    "style",
    `
    display:flex;
    flex-direction:column;
    justify-content: center;
    top:50%;
    left:50%;
    position: absolute;
    width :200px;
    height:100px;
    padding:10px;
    border:1px solid wheat;
    border-radius: 10px;
    box-shadow: 0px 0px 5px wheat;
    text-transform: capitalize;
    background-color:wheat;
    text-shadow: 1px 1px 2px rgb(0, 66, 8), 0 0 25px  rgb(0, 66, 8), 0 0 5px rgb(0, 66, 8);
    transform: translate(-50%,-50%);
    `
  );

  alertButton.setAttribute(
    "style",
    `
    border:2px ridge  rgb(132, 198, 140);
    background-color: rgb(132, 198, 140);
    border-radius: 10px;
    padding:10px 
    color: rgb(0, 66, 8);
    text-align: center;
    text-transform: capitalize;
    transition: all .2s ease 0s;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgb(132, 198, 140), 0 6px 20px 0 rgb(132, 198, 140) ;
    text-shadow: 1px 1px 2px rgb(0, 66, 8), 0 0 25px  rgb(0, 66, 8), 0 0 5px rgb(0, 66, 8);
    transition-duration: .5s;
    `
  );

  alert.innerHTML = `<span style="padding:10px ">${message}</span>`;
  alert.appendChild(alertButton);
  alertButton.addEventListener("click", (e) => {
    alert.remove();
  });
  if (timeout != null) {
    setTimeout(() => {
      alert.remove();
    }, Number(timeout));
  }
  document.body.appendChild(alert);
};

document.getElementById("submitButton").onclick = function callAlert() {
  let guess = document.getElementById("guessField").value;
  guesses += 1;

  if (guess == answer) {
    window.alert(`Well done!.
        It took ${guesses}  guesses`);

    answer = Math.floor(Math.random() * 20 + 1);
    guesses = 0;
  } else if (guess > answer && guess <= 20) {
    window.alert(`Too large, Try again!`);
  } else if (guess < answer && guess >= 1) {
    window.alert(`Too small, Try again!`);
  } else {
    window.alert(`Please enter a number between 1 to 20`);
  }
};
