document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".featured-project");

    projects.forEach((project) => {
        project.addEventListener("click", function () {
            // Remove active class from all projects
            projects.forEach((p) => p.classList.remove("active"));
            
            // Add active class to the clicked project
            this.classList.add("active");
        });

        // Optional: Hide on second tap (toggle effect)
        project.addEventListener("touchend", function (e) {
            setTimeout(() => {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                }
            }, 3000); // Hide after 3 seconds
        });
    });
});
