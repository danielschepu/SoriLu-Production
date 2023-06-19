function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    container.querySelector("img").style.transform = "scale(1.2)";
  });

  container.addEventListener("mouseleave", () => {
    container.querySelector("img").style.transform = "scale(1)";
  });
});

function showUsername() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  alert("Nickname: " + username + "\nPassword: " + password);
}

function ValidateEmail(element) {
  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (element.value === "") element.style.border = "";
  else if (element.value.match(validRegex))
    element.style.border = "1px solid green";
  else element.style.border = "1px solid red";
}

function ValidatePassword(element) {
  var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (element.value === "") element.style.border = "";
  else if (element.value.match(validRegex))
    element.style.border = "1px solid green";
  else element.style.border = "1px solid red";
}

function checkExistingEmails(email, existingEmails) {
  const index = existingEmails.findIndex((e) => e === email);
  return index !== -1 ? index : false;
}

function checkExistingPasswords(password, existingPasswords) {
  const index = existingPasswords.findIndex((p) => p === password);
  return index !== -1 ? index : false;
}

function handleButtonClick() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const existingEmails = ["Valeria@ciobanu.com"];
  const existingPasswords = ["Printesa8"];

  const emailIndex = checkExistingEmails(email, existingEmails);
  const passwordIndex = checkExistingPasswords(password, existingPasswords);

  if (emailIndex === passwordIndex && emailIndex !== false) {
    window.location.href = "galerie.html";
  } else {
    alert("Contul dumneavoastră nu există.");
    alert("Apasă pe Înregistrare pentru a crea un cont.");
  }
}

function validateFirstName(input) {
  const regex = /^[a-zA-Z]{3,}$/;
  if (!regex.test(input.value)) {
    input.setCustomValidity(
      "Numele trebuie să conțină minim 3 litere și să nu conțină spații."
    );
  } else {
    input.setCustomValidity("");
  }
}

function validateLastName(input) {
  const regex = /^[a-zA-Z]{3,}$/;
  if (!regex.test(input.value)) {
    input.setCustomValidity(
      "Prenumele trebuie să conțină minim 3 litere și să nu conțină spații."
    );
  } else {
    input.setCustomValidity("");
  }
}

function validateEmail(input) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(input.value)) {
    input.setCustomValidity("Adresa de e-mail nu este validă.");
  } else {
    input.setCustomValidity("");
  }
}

function validateCode(input) {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(input.value)) {
    input.setCustomValidity("Codul trebuie să conțină 10 cifre.");
  } else {
    input.setCustomValidity("");
  }
}

function validatePhone(input) {
  const regex = /^0[0-9]{8}$/;
  if (!regex.test(input.value)) {
    input.setCustomValidity(
      "Numărul de telefon trebuie să înceapă cu 0 și să conțină 9 cifre."
    );
  } else {
    input.setCustomValidity("");
  }
}

function validatePassword(input) {
  const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regex.test(input.value)) {
    input.setCustomValidity(
      "Parola trebuie să conțină minim 8 caractere, cel puțin o literă mare și cel puțin o cifră."
    );
  } else {
    input.setCustomValidity("");
  }
}

function handleButtonClick1() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const codeInput = document.getElementById("code");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");

  if (
    firstNameInput.checkValidity() &&
    lastNameInput.checkValidity() &&
    emailInput.checkValidity() &&
    genderInput &&
    codeInput.checkValidity() &&
    phoneInput.checkValidity() &&
    passwordInput.checkValidity()
  ) {
    alert("Formularul a fost completat corect!");
  } else {
    alert("Vă rugăm să completați corect toate câmpurile obligatorii.");
  }
}

const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    gallery[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        //if index value is greater and equal to gallery length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }
};

function validateForm() {
  let numeInput = document.getElementById("nume").value;
  let emailInput = document.getElementById("email").value;
  let telefonInput = document.getElementById("telefon").value;
  let intrebareInput = document.getElementById("intrebare").value;

  let numeRegex = /^[a-zA-Z\s]+$/;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  let telefonRegex = /^[0-9]+$/;
  let intrebareRegex = /^[a-zA-Z0-9.?$\s]+$/;

  let isValid = true;
  let errorMessages = [];

  if (!numeRegex.test(numeInput)) {
    errorMessages.push("Numele poate conține doar litere.");
    isValid = false;
  }

  if (!emailRegex.test(emailInput)) {
    errorMessages.push("Adresa de email nu este validă.");
    isValid = false;
  }

  if (!telefonRegex.test(telefonInput)) {
    errorMessages.push("Numărul de telefon poate conține doar cifre.");
    isValid = false;
  }

  if (!intrebareRegex.test(intrebareInput)) {
    errorMessages.push(
      "Întrebarea poate conține doar litere, cifre, puncte și semne de întrebare."
    );
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").style.display = "block";
  } else {
    alert(errorMessages.join("\n"));
  }
}
