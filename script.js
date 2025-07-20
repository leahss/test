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

  document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const data = {
      companyName: document.getElementById("companyName").value,
      contactName: document.getElementById("contactName").value,
      contactEmail: document.getElementById("contactEmail").value,
      poReference: document.getElementById("poReference").value,
      endDestination: document.getElementById("endDestination").value,
      endUser: document.getElementById("endUser").value,
      endFacility: document.getElementById("endFacility").value,
      projectType: document.getElementById("projectType").value,
      overallRating: document.getElementById("overallRating").value,
      wouldUseAgain: document.getElementById("wouldUseAgain").value,
      sparePartsDescription: document.getElementById("sparePartsDescription").value,
      sparePartsQuotationTime: document.getElementById("sparePartsQuotationTime").value,
      sparePartsQuotationQuality: document.getElementById("sparePartsQuotationQuality").value,
      sparePartsDelivery: document.getElementById("sparePartsDelivery").value,
      sparePartsQuality: document.getElementById("sparePartsQuality").value,
      sparePartsComments: document.getElementById("sparePartsComments").value,
      fieldServiceEquipment: document.getElementById("fieldServiceEquipment").value,
      fieldServiceSupport: document.getElementById("fieldServiceSupport").value,
      fieldServiceQuotationTime: document.getElementById("fieldServiceQuotationTime").value,
      fieldServiceQuotationQuality: document.getElementById("fieldServiceQuotationQuality").value,
      fieldServiceQuality: document.getElementById("fieldServiceQuality").value,
      fieldServiceExpertise: document.getElementById("fieldServiceExpertise").value,
      fieldServiceComments: document.getElementById("fieldServiceComments").value,
      largeProjectDescription: document.getElementById("largeProjectDescription").value,
      largeProjectProposalTime: document.getElementById("largeProjectProposalTime").value,
      largeProjectProposalQuality: document.getElementById("largeProjectProposalQuality").value,
      largeProjectExecutionTime: document.getElementById("largeProjectExecutionTime").value,
      largeProjectExecutionQuality: document.getElementById("largeProjectExecutionQuality").value,
      largeProjectComments: document.getElementById("largeProjectComments").value
    };
  
    fetch("https://script.google.com/macros/s/AKfycbx_zCJ2eWFBkTRNmahNFbyvz5WZQDQWXsBFYD708JG_BCfYcFfH93K9vcBJq7YvGUQb/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Server Response:", result);
        alert("Feedback submitted successfully!");
      })
      .catch((err) => {
        console.error("Fetch error details:", err);
        alert("There was an error submitting the form.");
      });
  });
  


  
  
  