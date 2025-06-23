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


function resizeVideoContainers() {
    const videos = document.querySelectorAll(".video video");
    const container = document.querySelector(".containerr");

    if (videos.length > 0 && container) {
        let width = container.clientWidth;
        let height = width * (9 / 16); // Maintain 16:9 aspect ratio

        videos.forEach(video => {
            video.style.width = `${width}px`;
            video.style.height = `${height}px`;
        });
    }
}

// Resize videos when the window loads or resizes
window.addEventListener("resize", resizeVideoContainers);
window.addEventListener("load", resizeVideoContainers);



// Select the comment icon, comment container, and container-1
const commentIcon = document.querySelector('.commentss');
const commentContainer = document.getElementById('commentContainer');
const container1 = document.querySelector('.container-1');

// Add event listener to the comment icon
commentIcon.addEventListener('click', function () {
    if (commentContainer.style.display === 'none' || commentContainer.style.display === '') {
        commentContainer.style.display = 'block'; // Show comment container
        container1.style.marginTop = '50px'; // Move container-1 down by 50px
    } else {
        commentContainer.style.display = 'none'; // Hide comment container
        container1.style.marginTop = '15px'; // Reset container-1 position
    }
});


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


  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".optionn > div");
    const sections = document.querySelectorAll(".video-group");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        sections.forEach((sec, i) => {
          sec.style.display = i === index ? "flex" : "none";
        });
      });
    });

    // Default: Show "All" only
    sections.forEach((sec, i) => {
      sec.style.display = i === 0 ? "flex" : "none";
    });
  });


  const tabs = document.querySelectorAll('.optionn > div');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active')); // remove from all
      tab.classList.add('active'); // add to clicked
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('.commentt textarea');

    textareas.forEach(textarea => {
      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'; // Cap at 200px
      });
    });
  });
  

  const commentBox = document.querySelector('.commentt.new');
  const textarea = commentBox.querySelector('textarea');
  const cancelBtn = commentBox.querySelector('.cancel-btn');
  const sendBtn = commentBox.querySelector('.send-btn');

  textarea.addEventListener('input', () => {
    if (textarea.value.trim() !== '') {
      commentBox.classList.add('typing');
    } else {
      commentBox.classList.remove('typing');
    }
  });

  cancelBtn.addEventListener('click', () => {
    textarea.value = '';
    commentBox.classList.remove('typing');
  });

  sendBtn.addEventListener('click', () => {
    const comment = textarea.value.trim();
    if (comment) {
      console.log("Submitted comment:", comment);
      textarea.value = '';
      commentBox.classList.remove('typing');
    }
  });

  

  document.getElementById('submitCommentBtn').addEventListener('click', function () {
    const commentText = document.getElementById('newCommentText').value.trim();
  
    if (commentText === '') {
      alert('Please write a comment before submitting.');
      return;
    }
  
    // Create the main comment container
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('commentt', 'display');
  
    // Profile section
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('commentt-profile');
  
    const profileImg = document.createElement('img');
    profileImg.src = 'New folder/account.png'; // default profile image
    profileDiv.appendChild(profileImg);
  
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('commentt-name');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Afrilens'; // You can make this dynamic if needed
    nameDiv.appendChild(nameLabel);
    profileDiv.appendChild(nameDiv);
  
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('timer');
    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Just now';
    timeDiv.appendChild(timeLabel);
    profileDiv.appendChild(timeDiv);
  
    commentDiv.appendChild(profileDiv);
  
    // Comment text
    const commentTextarea = document.createElement('textarea');
    commentTextarea.rows = 5;
    commentTextarea.cols = 50;
    commentTextarea.readOnly = true;
    commentTextarea.textContent = commentText;
    commentDiv.appendChild(commentTextarea);
  
    // Action section
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('commentt-Section');
  
    const likeDiv = document.createElement('div');
    likeDiv.classList.add('like');
    likeDiv.innerHTML = `<img src="New folder/like.png"><label>0</label>`;
  
    const replyDiv = document.createElement('div');
    replyDiv.classList.add('reply');
    replyDiv.innerHTML = `<img src="New folder/reply.png"><label>0</label>`;
  
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebarr');
    sidebarDiv.innerHTML = `<img src="New folder/sidebar 6.png">`;
  
    actionDiv.appendChild(likeDiv);
    actionDiv.appendChild(replyDiv);
    actionDiv.appendChild(sidebarDiv);
    commentDiv.appendChild(actionDiv);
  
    // Append the new comment to the scroll area
    const scrollArea = document.getElementById('commentScrollArea');
    scrollArea.appendChild(commentDiv);
  
    // Clear the textarea
    document.getElementById('newCommentText').value = '';
  
    // Optional: scroll to the bottom
    scrollArea.scrollTop = scrollArea.scrollHeight;
  });


  document.querySelectorAll('.kontainer').forEach(kontainer => {
    const video = kontainer.querySelector('video');
    let hoverTimeout;
    let lastTime = 0;

    kontainer.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        video.currentTime = lastTime;
        video.play();
      }, 300); // 300ms delay like YouTube
    });

    kontainer.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      lastTime = video.currentTime;
      video.pause();
      video.load(); // This resets the poster
    });
  });


  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video').forEach(container => {
      const video = container.querySelector('video');
      const overlay = container.querySelector('.play-overlay');

      if (!video) return;

      video.muted = false; // Unmute
      video.controls = true;

      // Try to autoplay with sound
      const tryPlay = () => {
        video.play()
          .then(() => {
            if (overlay) overlay.style.opacity = '0';
          })
          .catch(err => {
            if (overlay) overlay.style.opacity = '1';
            // Retry on user click
            if (overlay) {
              overlay.addEventListener('click', () => {
                video.play();
              });
            }
          });
      };

      tryPlay();

      // Show/hide overlay based on play state
      video.addEventListener('pause', () => {
        if (overlay) overlay.style.opacity = '1';
      });

      video.addEventListener('play', () => {
        if (overlay) overlay.style.opacity = '0';
      });

      // Also toggle video on overlay click
      if (overlay) {
        overlay.addEventListener('click', () => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
      }
    });
  });



  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sectionn').forEach(section => {
      // LIKE logic
      const likeBox = section.querySelector('.likess');
      const likeDefault = likeBox.querySelector('.like-icon.default');
      const likeActive = likeBox.querySelector('.like-icon.active');
      const likeCount = likeBox.querySelector('.like-count');
      let liked = false;

      likeBox.addEventListener('click', () => {
        liked = !liked;
        likeDefault.classList.toggle('hidden', liked);
        likeActive.classList.toggle('hidden', !liked);
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = liked ? count + 1 : Math.max(0, count - 1);
      });

      // DISLIKE logic
      const dislikeBox = section.querySelector('.dislikee');
      const dislikeDefault = dislikeBox.querySelector('.dislike-icon.default');
      const dislikeActive = dislikeBox.querySelector('.dislike-icon.active');
      const dislikeCount = dislikeBox.querySelector('.dislike-count');
      let disliked = false;

      dislikeBox.addEventListener('click', () => {
        disliked = !disliked;
        dislikeDefault.classList.toggle('hidden', disliked);
        dislikeActive.classList.toggle('hidden', !disliked);
        let count = parseInt(dislikeCount.textContent);
        dislikeCount.textContent = disliked ? count + 1 : Math.max(0, count - 1);
      });

      // FOLLOW logic
      const followBox = section.querySelector('.follow');
      const followDefault = followBox.querySelector('.follow-icon.default');
      const followActive = followBox.querySelector('.follow-icon.active');
      const followLabel = followBox.querySelector('.follow-label');
      let following = false;

      followBox.addEventListener('click', () => {
        following = !following;
        followDefault.classList.toggle('hidden', following);
        followActive.classList.toggle('hidden', !following);
        followLabel.textContent = following ? 'Following' : 'Follow';
      });
    });
  });