// Change section visibility based on project type
document.getElementById("projectType").addEventListener("change", function () {
  const type = this.value;
  document.querySelectorAll(".conditional").forEach(section => section.style.display = "none");
  if (type === "Spare Parts") {
    document.getElementById("sparePartsSection").style.display = "block";
  } else if (type === "Field Service") {
    document.getElementById("fieldServiceSection").style.display = "block";
  } else if (type === "Large Project") {
    document.getElementById("largeProjectSection").style.display = "block";
  }
});

document.getElementById("survey-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://script.google.com/macros/s/AKfycbx_zCJ2eWFBkTRNmahNFbyvz5WZQDQWXsBFYD708JG_BCfYcFfH93K9vcBJq7YvGUQb/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(res => res.json())
  .then(res => {
    if (res.result === "success") {
      alert("Thank you for your feedback!");
    } else {
      alert("Error: " + res.message);
    }
  })
  .catch(err => {
    alert("Request failed: " + err);
  });
});
