let accountBtn = Array.from(document.getElementsByClassName("account-btn"));
let joinBtn = Array.from(document.getElementsByClassName("join-btn"));
let loggedIn = false;

const accountCreate = () => {
  let imgA = document.createElement("img");
  let imgB = document.createElement("img");

  imgA.src = "./public/images/profile-4.png";
  imgB.src = "./public/images/baseline-arrow-drop-down-24-px.png";
  imgB.className = "ms-2";
  let spanA = document.createElement("span");
  spanA.textContent = "Siddharth Goyal";
  spanA.style.fontSize = "0.8rem";
  spanA.className = "ms-2 d-flex justify-content-center align-items-center";
  spanA.appendChild(imgB);
  let acc = document.createElement("p");
  acc.className = "d-flex align-items-center";

  acc.appendChild(imgA);
  acc.appendChild(spanA);
  document.querySelector(".create-acc").appendChild(acc);
};

const handleLogin = (e) => {
  e.preventDefault();
  loggedIn = true;
  document.querySelector(".account-element").style.display = "none";
  accountCreate();
  document.querySelectorAll(".modal .btn-close").forEach((btn) => {
    btn.click();
  });
};

const handlejoin = (e) => {
  e.preventDefault();
  if (loggedIn) {
    e.target.innerHTML = `<span>
    <img src="./public/images/outline-exit-to-app-24-px.png" alt="leave icon"> Leave Group </span>`;
    e.target.className = "btn btn-outline-secondary text-secondary";
    document.querySelector(".groups").classList.toggle("d-none");
    document.querySelector(".groups").classList.toggle("d-block");
  } else {
    alert("You need to login");
  }
};

accountBtn.forEach((btn) => {
  btn.addEventListener("click", handleLogin);
});

joinBtn.forEach((btn) => {
  btn.addEventListener("click", handlejoin);
});
