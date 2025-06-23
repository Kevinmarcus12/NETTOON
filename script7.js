document.addEventListener("DOMContentLoaded", function() {
  const lightIcon = document.getElementById("theme-toggle-light");
  const darkIcon = document.getElementById("theme-toggle-dark");

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

  function toggleMode() {
      if (document.body.classList.contains("dark-mode")) {
          setTheme("light");
          localStorage.setItem("theme", "light");
      } else {
          setTheme("dark");
          localStorage.setItem("theme", "dark");
      }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      setTheme(savedTheme);
  } else {
      setTheme("light");
  }

  darkIcon.addEventListener("click", toggleMode);
  lightIcon.addEventListener("click", toggleMode);
});



document.querySelector(".account-dropdown").onclick = function(event) {
  event.preventDefault();
  var dropdown = document.getElementById("accountDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
};

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
      event.stopPropagation();
      notificationContainer.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      if (!notificationContainer.contains(event.target) && !notificationIcon.contains(event.target)) {
          notificationContainer.classList.remove("active");
      }
  });
});


document.querySelectorAll('.shorts').forEach(shortsContainer => {
  const commentIcon = shortsContainer.querySelector('.comment-icon');

  commentIcon.addEventListener('click', () => {
    // Toggle the show-comments class on the shorts container
    shortsContainer.classList.toggle('show-comments');
  });
});



   document.addEventListener('DOMContentLoaded', () => {
    const scrollArea = document.querySelector('.scroll-area');
    const shorts = document.querySelectorAll('.shorts');
    const upBtn = document.querySelector('.up-btn');
    const downBtn = document.querySelector('.down-btn');

    let currentIndex = 0;

    function scrollToIndex(index) {
      if (index >= 0 && index < shorts.length) {
        shorts[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        currentIndex = index;
      }
    }

    downBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex + 1);
    });

    upBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex - 1);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.caption-toggle').forEach(button => {
      button.addEventListener('click', () => {
        // Find this caption and its short-video wrapper
        const caption = button.closest('.caption');
        const profile = button.closest('.short-video').querySelector('.profile');
  
        // Toggle the expanded state
        const isExpanded = caption.classList.toggle('expanded');
  
        // Toggle profile shift
        profile.classList.toggle('shift-up', isExpanded);
  
        // Update button text
        button.textContent = isExpanded ? 'see less' : 'see more';
      });
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.commentt').forEach(commentBox => {
      const textarea = commentBox.querySelector('textarea');

      textarea.addEventListener('input', () => {
        if (textarea.value.trim() !== "") {
          commentBox.classList.add('typing');
        } else {
          commentBox.classList.remove('typing');
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Loop through each short video block
    document.querySelectorAll(".shorts").forEach((short) => {
      const likeBtn = short.querySelector(".like");
      const dislikeBtn = short.querySelector(".dislike");
  
      const likeIcon = likeBtn.querySelector(".like-icon");
      const likedIcon = likeBtn.querySelector(".liked-icon");
      const likeCountSpan = likeBtn.querySelector("span");
  
      const dislikeIcon = dislikeBtn.querySelector(".dislike-icon");
      const dislikedIcon = dislikeBtn.querySelector(".disliked-icon");
      const dislikeCountSpan = dislikeBtn.querySelector("span");
  
      let isLiked = false;
      let isDisliked = false;
  
      likeBtn.addEventListener("click", () => {
        isLiked = !isLiked;
  
        if (isLiked) {
          likeIcon.classList.remove("visible");
          likedIcon.classList.add("visible");
          likeCountSpan.textContent = parseInt(likeCountSpan.textContent) + 1;
        } else {
          likedIcon.classList.remove("visible");
          likeIcon.classList.add("visible");
          likeCountSpan.textContent = Math.max(0, parseInt(likeCountSpan.textContent) - 1);
        }
      });
  
      dislikeBtn.addEventListener("click", () => {
        isDisliked = !isDisliked;
  
        if (isDisliked) {
          dislikeIcon.classList.remove("visible");
          dislikedIcon.classList.add("visible");
          dislikeCountSpan.textContent = parseInt(dislikeCountSpan.textContent) + 1;
        } else {
          dislikedIcon.classList.remove("visible");
          dislikeIcon.classList.add("visible");
          dislikeCountSpan.textContent = Math.max(0, parseInt(dislikeCountSpan.textContent) - 1);
        }
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(section => {
      const likeBox = section.querySelector('.likess');
      const dislikeBox = section.querySelector('.dislikee');
  
      const likeDefault = likeBox.querySelector('.like-icon-sec.default');
      const likeActive = likeBox.querySelector('.like-icon-sec.active');
      const likeCount = likeBox.querySelector('.like-count-sec');
  
      const dislikeDefault = dislikeBox.querySelector('.dislike-icon-sec.default');
      const dislikeActive = dislikeBox.querySelector('.dislike-icon-sec.active');
      const dislikeCount = dislikeBox.querySelector('.dislike-count-sec');
  
      let liked = false;
      let disliked = false;
  
      likeBox.addEventListener('click', () => {
        liked = !liked;
  
        if (liked) {
          likeDefault.classList.add('hidden');
          likeActive.classList.remove('hidden');
          likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
          likeDefault.classList.remove('hidden');
          likeActive.classList.add('hidden');
          likeCount.textContent = Math.max(0, parseInt(likeCount.textContent) - 1);
        }
      });
  
      dislikeBox.addEventListener('click', () => {
        disliked = !disliked;
  
        if (disliked) {
          dislikeDefault.classList.add('hidden');
          dislikeActive.classList.remove('hidden');
          dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        } else {
          dislikeDefault.classList.remove('hidden');
          dislikeActive.classList.add('hidden');
          dislikeCount.textContent = Math.max(0, parseInt(dislikeCount.textContent) - 1);
        }
      });
    });
  });