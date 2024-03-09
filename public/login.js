function login() {
    const nameEl = document.querySelector("#username");
    localStorage.setItem("username", nameEl.value);
    window.location.href = "tracker.html";

    const passEl = document.querySelector("#password");
    localStorage.setItem("password", passEl.value); 
    window.location.href = "tracker.html";
  }