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
      e.preventDefault(); // 🚫 Stops the default submit that changes the URL

      const formData = new FormData(form);
      const data = {};

      // Convert FormData to JSON object
      formData.forEach((value, key) => {
        data[key] = value || ""; // default to empty string
      });

      try {
        const response = await fetch("https://script.google.com/macros/s/PASTE-YOUR-DEPLOYED-URL/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
          mode: "no-cors"
        });

        alert("Form submitted successfully!");
        form.reset(); // Optional: clear form after submit
      } catch (err) {
        console.error("Error:", err);
        alert("There was an error submitting the form.");
      }
    });
  });

  


  
  
  
