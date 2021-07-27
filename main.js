const focused = (element) => {
  var prevElement = Array.from(document.getElementsByClassName("clicked"))[0];
  if (prevElement != null) prevElement.classList.remove("clicked");
  {
    element.classList.add("clicked");
  }
};

var inputArray = Array.from(document.getElementsByTagName("input"));
var emails_fmt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const clrForm = () => {
  inputArray.forEach((ele) => {
    ele.value = "";
  });
};

const verify = () => {
  var flag = 0;
  event.preventDefault();
  inputArray.forEach((element) => {
    if (
      element.value === "" ||
      (element.id === "email" && !element.value.match(emails_fmt))
    ) {
      element.parentElement.classList.add("error");
      element.nextElementSibling.style.visibility = "visible";
      element.parentElement.nextElementSibling.style.display = "block";
      if (element.id === "email" && element.value === "") {
        document.getElementById("emailLabel").innerHTML =
          "<em>Email can't be empty";
      } else if (element.id === "email" && !element.value.match(emails_fmt)) {
        document.getElementById("emailLabel").innerHTML =
          "<em>Looks like this is not an email</em>";
      }
      flag += 1;
    } else {
      if (element.parentElement.classList.contains("error")) {
        element.parentElement.classList.remove("error");
        element.nextElementSibling.style.visibility = "hidden";
        element.parentElement.nextElementSibling.style.display = "none";

        if (flag > 0) {
          flag -= 1;
        }
      }
    }
  });
  if (flag === 0) {
    alert("Form submitted successfully");
    document.getElementById("fname").focus();
    clrForm();
    flag = 0;
  } else {
    console.log(`${flag} errors in form`);
    flag = 0;
  }
};
