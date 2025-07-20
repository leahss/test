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

  document.getElementById("survey-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    companyName: form.companyName.value || "",
    contactName: form.contactName.value || "",
    contactEmail: form.contactEmail.value || "",
    poReference: form.poReference.value || "",
    endDestination: form.endDestination.value || "",
    endUser: form.endUser.value || "",
    endFacility: form.endFacility.value || "",
    projectType: form.projectType.value || "",
    overallRating: form.overallRating.value || "",
    wouldUseAgain: form.wouldUseAgain.value || "",

    sparePartsDescription: form.sparePartsDescription?.value || "",
    sparePartsQuotationTime: form.sparePartsQuotationTime?.value || "",
    sparePartsQuotationQuality: form.sparePartsQuotationQuality?.value || "",
    sparePartsDelivery: form.sparePartsDelivery?.value || "",
    sparePartsQuality: form.sparePartsQuality?.value || "",
    sparePartsComments: form.sparePartsComments?.value || "",

    fieldServiceEquipment: form.fieldServiceEquipment?.value || "",
    fieldServiceSupport: form.fieldServiceSupport?.value || "",
    fieldServiceQuotationTime: form.fieldServiceQuotationTime?.value || "",
    fieldServiceQuotationQuality: form.fieldServiceQuotationQuality?.value || "",
    fieldServiceQuality: form.fieldServiceQuality?.value || "",
    fieldServiceExpertise: form.fieldServiceExpertise?.value || "",
    fieldServiceComments: form.fieldServiceComments?.value || "",

    largeProjectDescription: form.largeProjectDescription?.value || "",
    largeProjectProposalTime: form.largeProjectProposalTime?.value || "",
    largeProjectProposalQuality: form.largeProjectProposalQuality?.value || "",
    largeProjectExecutionTime: form.largeProjectExecutionTime?.value || "",
    largeProjectExecutionQuality: form.largeProjectExecutionQuality?.value || "",
    largeProjectComments: form.largeProjectComments?.value || ""
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx_zCJ2eWFBkTRNmahNFbyvz5WZQDQWXsBFYD708JG_BCfYcFfH93K9vcBJq7YvGUQb/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "no-cors" // use this if the script isn't allowing CORS
    });

    console.log("Submitted!", response);
    alert("Form submitted successfully!");

  } catch (err) {
    console.error("Fetch error:", err);
    alert("Submission failed: " + err.message);
  }
});

  


  
  
  
