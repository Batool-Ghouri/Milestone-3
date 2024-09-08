document.getElementById('generate')?.addEventListener('click', function(event) {
    // Prevent the form from auto-submitting and clearing the inputs
    event.preventDefault();

    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Generate resume HTML
    const resumeHTML = `
        <div class="resume">
            <h1>Personal Information</h1>
            <p>Name: ${name}
            <p>Email: ${email} | Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <h2>Career Objective</h2>
            <p>To secure a challenging position as a software developer where I can apply my coding skills,learn new technologies, and contribute to impactful projects in a dynamic and growth-oriented environment.
            <h2>Academic Details</h2>
            <p>${education.replace(/\n/g, '<br>')}</p>
            <h2>Skills</h2>
            <ul>
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
            <h2>Experience</h2>
            <p>${experience.replace(/\n/g, '<br>')}</p>
        </div>
    `;

    // Insert the generated resume into the resume-container div
    const resumeContainer = document.getElementById('resume-container') as HTMLDivElement;
    resumeContainer.innerHTML = resumeHTML;
});
