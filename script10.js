document.addEventListener("DOMContentLoaded", function() {
    const lightIcon = document.getElementById("theme-toggle-light");
    const darkIcon = document.getElementById("theme-toggle-dark");

    // Function to set the theme based on the mode
    function setTheme(mode) {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            lightIcon.style.display = "block";
            darkIcon.style.display = "none";
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";
        }
    }

    // Function to toggle modes
    function toggleMode() {
        if (document.body.classList.contains("dark-mode")) {
            setTheme("light");
            localStorage.setItem("theme", "light"); // Save preference
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark"); // Save preference
        }
    }

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme); // Set the theme based on saved preference
    } else {
        setTheme("light"); // Default to light mode if no preference is saved
    }

    // Event listener for the icons
    darkIcon.addEventListener("click", toggleMode);
    lightIcon.addEventListener("click", toggleMode);
});

document.querySelector(".account-dropdown").onclick = function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var dropdown = document.getElementById("accountDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.account-dropdown') && !event.target.closest('.account-dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
};



document.addEventListener("DOMContentLoaded", function () {
    const notificationIcon = document.getElementById("notification-icon");
    const notificationContainer = document.getElementById("notification-container");
  
    notificationIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents click from propagating to document
      notificationContainer.classList.toggle("active");
    });
  
    // Close the notification when clicking outside
    document.addEventListener("click", function (event) {
      if (!notificationContainer.contains(event.target) && !notificationIcon.contains(event.target)) {
        notificationContainer.classList.remove("active");
      }
    });
  });
  



document.getElementById('dob').addEventListener('change', function() {
    let dob = new Date(this.value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let parentConsent = document.getElementById('parent-consent');
    
    if (age < 13) {
        parentConsent.style.display = 'block';
        document.getElementById('parent-name').required = true;
        document.getElementById('parent-email').required = true;
    } else {
        parentConsent.style.display = 'none';
        document.getElementById('parent-name').required = false;
        document.getElementById('parent-email').required = false;
    }
});

document.getElementById("country").addEventListener("change", function () {
    let selectedOption = this.options[this.selectedIndex];
    let countryCode = selectedOption.getAttribute("data-code");
    document.getElementById("country-code").value = countryCode || "";
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessage = document.getElementById('password-error');

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
