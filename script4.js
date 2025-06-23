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
  
  function toggleReadMore(event) {
    event.preventDefault();
  
    const moreText = document.getElementById("moreText");
    const toggleBtn = document.getElementById("toggleBtn");
    const container = document.getElementById("container2");
  
    const isHidden = moreText.style.display === "none" || moreText.style.display === "";
  
    moreText.style.display = isHidden ? "inline" : "none";
    toggleBtn.textContent = isHidden ? "See less" : "See more";
  
    container.classList.toggle("collapsed", !isHidden);
    container.classList.toggle("expanded", isHidden);
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    // For container-3 follow
    document.querySelectorAll('.container-3 .follow').forEach(followBox => {
      const followDefaultImg = followBox.querySelector('.follow-icon.default');
      const followActiveImg = followBox.querySelector('.follow-icon.active');
      const followLabel = followBox.querySelector('.follow-label:not(.active)');
      const followingLabel = followBox.querySelector('.follow-label.active');
      let isFollowing = false;

      followBox.addEventListener('click', () => {
        isFollowing = !isFollowing;
        followDefaultImg.classList.toggle('hidden', isFollowing);
        followActiveImg.classList.toggle('hidden', !isFollowing);
        followLabel.classList.toggle('hidden', isFollowing);
        followingLabel.classList.toggle('hidden', !isFollowing);
      });
    });
  });



        // 
        document.addEventListener("click", () => {
            const video = document.querySelector(".short-video video");
            if (video) {
              video.muted = false;
              video.play().catch((e) => console.log("Autoplayy with sound failed:", e));
            }
          }, { once: true });   

 // 





          document.addEventListener('DOMContentLoaded', function () {
            const tabs = document.querySelectorAll('.container-4 .tab');
            const containers = document.querySelectorAll('.content-container');
          
            tabs.forEach(tab => {
              tab.addEventListener('click', () => {
                // Remove active-tab from all tabs
                tabs.forEach(t => t.classList.remove('active-tab'));
          
                // Hide all containers
                containers.forEach(c => c.style.display = 'none');
          
                // Activate clicked tab
                tab.classList.add('active-tab');
          
                // Show related container
                const targetSelector = tab.getAttribute('data-target');
                const target = document.querySelector(targetSelector);
                if (target) {
                  target.style.display = 'flex';
                }
              });
            });
          
            // Optional: Set default tab on load
            const defaultTab = document.querySelector('.tab.my-videos');
            if (defaultTab) {
              defaultTab.classList.add('active-tab');
              document.querySelector('.container-1').style.display = 'flex';
            }
          });





  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.shorts').forEach(container => {
      const video = container.querySelector('video');
      const overlay = container.querySelector('.play-overlay');

      if (!video || !overlay) return;

      video.controls = false;
      video.muted = true; // autoplay requires muted

      // Try autoplay
      video.play().catch(err => {
        console.warn('Autoplay failed:', err);
        overlay.style.opacity = '1';
      });

      // Handle overlay click to unmute and toggle playback
      overlay.addEventListener('click', () => {
        video.muted = false;
        if (video.paused) {
          video.play().then(() => {
            overlay.style.opacity = '0';
          }).catch(err => {
            console.error('Play failed after click:', err);
          });
        } else {
          video.pause();
        }
      });

      // Sync overlay with video state
      video.addEventListener('pause', () => {
        overlay.style.opacity = '1';
      });

      video.addEventListener('play', () => {
        overlay.style.opacity = '0';
      });
    });
  });