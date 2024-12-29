// Get references to form elements and resume elements
var resumeForm = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumeContent = document.getElementById("resumeContent");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeLocation = document.getElementById("resumeLocation");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeMatric = document.getElementById("resumeMatric");
var resumeIntermediate = document.getElementById("resumeIntermediate");
var resumeDegree = document.getElementById("resumeDegree");
var resumeExperience = document.getElementById("resumeExperience");
var resumeSkills = document.getElementById("resumeSkills");
var resumeAchievements = document.getElementById("resumeAchievements");
// Buttons
var editButton = document.getElementById("resumeEditButton");
var downloadButton = document.getElementById("resumeDownload");
var printButton = document.getElementById("printResumeButton");
// Function to show the resume page
var showResumePage = function () {
    resumePage.classList.remove("hidden");
    resumeForm.style.display = "none";
};
// Function to show the form page for editing
var showFormPage = function () {
    resumePage.classList.add("hidden");
    resumeForm.style.display = "block";
};
// Function to generate the resume
var generateResume = function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var matric = document.getElementById("matric").value;
    var intermediate = document.getElementById("intermediate").value;
    var degree = document.getElementById("degree").value;
    var experience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    var achievements = document.getElementById("achievements").value;
    // Set values on the resume
    resumeName.textContent = name;
    resumeLocation.textContent = "Location:".concat(location);
    resumeEmail.textContent = "Email:".concat(email);
    resumePhone.textContent = "Phone:".concat(phone);
    resumeMatric.textContent = "Matriculation from ".concat(matric);
    resumeIntermediate.textContent = "Intermediate from ".concat(intermediate);
    resumeDegree.textContent = "Degree:".concat(degree);
    resumeExperience.textContent = experience;
    resumeAchievements.textContent = achievements;
    resumeSkills.textContent = skills;
    // Handle photo upload
    var photoInput = document.getElementById("photo");
    if (photoInput.files && photoInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            resumePhoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            resumePhoto.classList.remove("hidden");
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
    showResumePage();
};
// Event listener for form submission
resumeForm.addEventListener("submit", generateResume);
// Event listener for edit button
editButton.addEventListener("click", showFormPage);
// Print Resume Function
var printResume = function () {
    // Open the print dialog
    window.print();
};
// Event Listener for Print Button
printButton.addEventListener("click", printResume);
// Event listener for download button
// downloadButton.addEventListener("click", () => {
//     const resumeHTML = resumeContent.innerHTML;
//     const blob = new Blob([resumeHTML], { type: "text/html" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "Resume.html";
//     a.click();
//     URL.revokeObjectURL(url);
// });
