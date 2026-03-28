function openPopup(id) {
    let content = "";

    if (id === "edu1") {
        content = `
        <h2>University College of Engineering</h2>
        <p>Course: Mechanical Engineering</p>
        <p>Start: 2025</p>
        <p>End: 2029</p>
        <p>Grade: Ongoing</p>
        `;
    }

    if (id === "cert1") {
        content = `
        <h2>Python for Beginners</h2>
        <p>Issued: 2026</p>
        <p>Expiry: N/A</p>
        <p>Description: Foundation course in Python programming.</p>
        <a href="https://drive.google.com" target="_blank">
            <button>View Certificate</button>
        </a>
        `;
    }

    if (id === "proj1") {
        content = `
        <h2>Biomechanical Arm Model</h2>
        <p>Organization: Self Project</p>
        <p>Start: Jan 2026</p>
        <p>End: Mar 2026</p>
        <p>Description: Designed a robotic arm inspired by human biomechanics.</p>
        <button>View More</button>
        `;
    }

    document.getElementById("popup-data").innerHTML = content;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
