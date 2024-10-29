
function toggleProfile() {
    const profileContent = document.getElementById("profileContent");
    if (profileContent.style.display === "none") {
        profileContent.style.display = "block"; // Show content
    } else {
        profileContent.style.display = "none"; // Hide content
    }
}
