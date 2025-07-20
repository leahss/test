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
  
  // Handle form submission
  //https://script.google.com/macros/s/AKfycbw4q3CTd62OVXN6JguBhLvhYvTykEDW_6GhTTufnAsM4qqnVage31sawKuyDjqhUYi4/exec

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("survey-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbx_zCJ2eWFBkTRNmahNFbyvz5WZQDQWXsBFYD708JG_BCfYcFfH93K9vcBJq7YvGUQb/exec", {
        method: "POST",
        body: formData, // no headers needed
      });

      if (!response.ok) throw new Error("Response not OK");

      alert("Form submitted successfully!");
      form.reset();
    } catch (err) {
      console.error("Error:", err);
      alert("There was an error submitting the form.");
    }
  });
});

