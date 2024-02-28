function createAccount() {
    const firstEl = document.querySelector("#firstName");
    localStorage.setItem("firstName", firstEl.value);
    window.location.href = "tracker.html";

    const lastEl = document.querySelector("#lastName");
    localStorage.setItem("lastName", lastEl.value); 
    window.location.href = "tracker.html";

    const nameEl = document.querySelector("#user");
    localStorage.setItem("username", nameEl.value);
    window.location.href = "tracker.html";

    const passEl = document.querySelector("#password");
    localStorage.setItem("password", passEl.value); 
    window.location.href = "tracker.html";
  }