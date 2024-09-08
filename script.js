var _a;
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    // Prevent the form from auto-submitting and clearing the inputs
    event.preventDefault();
    // Get values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split('\n');
    var experience = document.getElementById('experience').value;
    // Generate resume HTML
    var resumeHTML = "\n        <div class=\"resume\">\n            <h1>Personal Information</h1>\n            <p>Name: ".concat(name, "\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n            <p>Address: ").concat(address, "</p>\n            <h2>Career Objective</h2>\n            <p>To secure a challenging position as a software developer where I can apply my coding skills,learn new technologies, and contribute to impactful projects in a dynamic and growth-oriented environment.\n            <h2>Academic Details</h2>\n            <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n            <h2>Skills</h2>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n            <h2>Experience</h2>\n            <p>").concat(experience.replace(/\n/g, '<br>'), "</p>\n        </div>\n    ");
    // Insert the generated resume into the resume-container div
    var resumeContainer = document.getElementById('resume-container');
    resumeContainer.innerHTML = resumeHTML;
});
