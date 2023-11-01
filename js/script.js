const signUpPanelButton = document.getElementById("signUpPanel");

const signInPanelButton = document.getElementById("signInPanel");

const container = document.getElementById("container");

// SignUp configuration

signUpPanelButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInPanelButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// firebase Auth handlers
