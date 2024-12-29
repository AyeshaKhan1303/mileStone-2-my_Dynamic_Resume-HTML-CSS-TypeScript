// Get references to form elements and resume elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLDivElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeLocation = document.getElementById("resumeLocation") as HTMLParagraphElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeMatric = document.getElementById("resumeMatric") as HTMLParagraphElement;
const resumeIntermediate = document.getElementById("resumeIntermediate") as HTMLParagraphElement;
const resumeDegree = document.getElementById("resumeDegree") as HTMLParagraphElement;
const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const resumeAchievements = document.getElementById("resumeAchievements") as HTMLParagraphElement;

// Buttons
const editButton = document.getElementById("resumeEditButton") as HTMLButtonElement;
const downloadButton = document.getElementById("resumeDownload") as HTMLButtonElement;

const printButton = document.getElementById("printResumeButton") as HTMLButtonElement;

// Function to show the resume page
const showResumePage = () => {
    resumePage.classList.remove("hidden");
    resumeForm.style.display = "none";

};

// Function to show the form page for editing
const showFormPage = () => {
    resumePage.classList.add("hidden");
    resumeForm.style.display = "block";
};

// Function to generate the resume
const generateResume = (event: Event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const matric = (document.getElementById("matric") as HTMLInputElement).value;
    const intermediate = (document.getElementById("intermediate") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const experience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const achievements = (document.getElementById("achievements") as HTMLTextAreaElement).value;

    // Set values on the resume
    resumeName.textContent = name;
    resumeLocation.textContent = `Location:${location}`;
    resumeEmail.textContent = `Email:${email}`;
    resumePhone.textContent = `Phone:${phone}`; 
    resumeMatric.textContent = `Matriculation from ${matric}`;
    resumeIntermediate.textContent = `Intermediate from ${intermediate}`;
    resumeDegree.textContent = `Degree:${degree}`;
    resumeExperience.textContent =  experience;
    resumeAchievements.textContent = achievements;
    resumeSkills.textContent = skills;
   

    // Handle photo upload
    const photoInput = document.getElementById("photo") as HTMLInputElement;
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            resumePhoto.src = e.target?.result as string;
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
const printResume = () => {
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