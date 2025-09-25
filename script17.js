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


const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".content-section");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove active from all
    menuItems.forEach(i => i.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Add active to clicked
    item.classList.add("active");
    const target = document.getElementById(item.dataset.target);
    target.classList.add("active");
  });
});



// Profile Picture Preview
document.getElementById('profilePic').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profilePicPreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Save Profile Form
document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const bio = document.getElementById('bio').value.trim();

  if (!username) {
    alert("Username cannot be empty!");
    return;
  }

  // For now, just simulate saving
  alert("Profile updated successfully!");
});



// Password match check
const newPassword = document.getElementById("newPassword");
const confirmNewPassword = document.getElementById("confirmNewPassword");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");

function checkPasswordMatch() {
  if (newPassword.value && confirmNewPassword.value) {
    if (newPassword.value === confirmNewPassword.value) {
      passwordMatchMessage.textContent = "✅ Passwords match";
      passwordMatchMessage.style.color = "green";
    } else {
      passwordMatchMessage.textContent = "❌ Passwords do not match";
      passwordMatchMessage.style.color = "red";
    }
  } else {
    passwordMatchMessage.textContent = "";
  }
}

newPassword.addEventListener("input", checkPasswordMatch);
confirmNewPassword.addEventListener("input", checkPasswordMatch);

// Form submit (simulate save)
document.getElementById("accountForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Account settings saved!");
});


// Handle Notifications Settings Save
document.getElementById("notificationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const settings = {
    emailEpisodes: document.getElementById("emailEpisodes").checked,
    emailComments: document.getElementById("emailComments").checked,
    pushTrending: document.getElementById("pushTrending").checked,
    pushRecommendations: document.getElementById("pushRecommendations").checked,
    systemAlerts: document.getElementById("systemAlerts").checked,
    specialOffers: document.getElementById("specialOffers").checked,
  };

  console.log("Saved Notification Preferences:", settings);

  // Simulate save with localStorage (can later be replaced with API call)
  localStorage.setItem("notificationSettings", JSON.stringify(settings));

  alert("✅ Your notification preferences have been saved successfully!");
});

// Load preferences if already saved
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("notificationSettings"));
  if (saved) {
    document.getElementById("emailEpisodes").checked = saved.emailEpisodes;
    document.getElementById("emailComments").checked = saved.emailComments;
    document.getElementById("pushTrending").checked = saved.pushTrending;
    document.getElementById("pushRecommendations").checked = saved.pushRecommendations;
    document.getElementById("systemAlerts").checked = saved.systemAlerts;
    document.getElementById("specialOffers").checked = saved.specialOffers;
  }
});



// Privacy settings save handler
document.getElementById("privacyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const settings = {
    profileVisibility: document.getElementById("profileVisibility").value,
    searchVisibility: document.getElementById("searchVisibility").checked,
    shareActivity: document.getElementById("shareActivity").checked,
    personalizedAds: document.getElementById("personalizedAds").checked,
    blockedUsers: Array.from(document.querySelectorAll("#blockedUsersList li span"))
      .map(li => li.textContent)
  };

  console.log("Saved Privacy Preferences:", settings);
  localStorage.setItem("privacySettings", JSON.stringify(settings));

  alert("🔒 Your privacy preferences have been updated!");
});

// Block/Unblock functionality
const blockedUsersList = document.getElementById("blockedUsersList");
const blockUserBtn = document.getElementById("blockUserBtn");

blockUserBtn.addEventListener("click", () => {
  const username = document.getElementById("blockUserInput").value.trim();
  if (username) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${username}</span> 
      <button onclick="unblockUser(this)">Unblock</button>`;
    blockedUsersList.appendChild(li);

    document.getElementById("blockUserInput").value = "";
  }
});

function unblockUser(btn) {
  btn.parentElement.remove();
}

// Load saved preferences
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("privacySettings"));
  if (saved) {
    document.getElementById("profileVisibility").value = saved.profileVisibility;
    document.getElementById("searchVisibility").checked = saved.searchVisibility;
    document.getElementById("shareActivity").checked = saved.shareActivity;
    document.getElementById("personalizedAds").checked = saved.personalizedAds;

    saved.blockedUsers.forEach(username => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${username}</span> 
        <button onclick="unblockUser(this)">Unblock</button>`;
      blockedUsersList.appendChild(li);
    });
  }
});



// Elements
const paymentMethodsList = document.getElementById("paymentMethodsList");
const transactionsBody = document.getElementById("transactionsBody");
const addPaymentModal = document.getElementById("addPaymentModal");
const addPaymentBtn = document.getElementById("addPaymentBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveCardBtn = document.getElementById("saveCardBtn");

// Open modal
addPaymentBtn.addEventListener("click", () => {
  addPaymentModal.classList.remove("hidden");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  addPaymentModal.classList.add("hidden");
});

// Save card
saveCardBtn.addEventListener("click", () => {
  const cardNumber = document.getElementById("cardNumber").value;
  const cardHolder = document.getElementById("cardHolder").value;

  if (cardNumber && cardHolder) {
    const masked = "•••• •••• •••• " + cardNumber.slice(-4);
    const li = document.createElement("li");
    li.innerHTML = `<span>${masked} - ${cardHolder}</span> 
      <button onclick="removeCard(this)">Remove</button>`;
    paymentMethodsList.appendChild(li);

    addPaymentModal.classList.add("hidden");
    document.getElementById("cardNumber").value = "";
    document.getElementById("expiryDate").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("cardHolder").value = "";
  }
});

// Remove card
function removeCard(btn) {
  btn.parentElement.remove();
}

// Load transactions (dummy data)
const transactions = [
  { date: "2025-09-01", plan: "Premium", amount: "$9.99", status: "Paid" },
  { date: "2025-08-01", plan: "Premium", amount: "$9.99", status: "Paid" },
  { date: "2025-07-01", plan: "Premium", amount: "$9.99", status: "Paid" }
];

transactions.forEach(tx => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${tx.date}</td>
    <td>${tx.plan}</td>
    <td>${tx.amount}</td>
    <td>${tx.status}</td>
  `;
  transactionsBody.appendChild(tr);
});

// Save billing info + methods
document.getElementById("paymentsForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const billingAddress = document.getElementById("billingAddress").value;
  const paymentMethods = Array.from(document.querySelectorAll("#paymentMethodsList li span"))
    .map(li => li.textContent);

  const settings = {
    billingAddress,
    paymentMethods
  };

  console.log("Saved Payments Settings:", settings);
  localStorage.setItem("paymentsSettings", JSON.stringify(settings));

  alert("💳 Payment preferences updated!");
});

// Load saved preferences
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("paymentsSettings"));
  if (saved) {
    document.getElementById("billingAddress").value = saved.billingAddress;
    saved.paymentMethods.forEach(method => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${method}</span> 
        <button onclick="removeCard(this)">Remove</button>`;
      paymentMethodsList.appendChild(li);
    });
  }
});


// Elements
const planCards = document.querySelectorAll(".plan-card");
const currentPlan = document.getElementById("currentPlan");
const cancelSubscriptionBtn = document.getElementById("cancelSubscriptionBtn");
const subscriptionForm = document.getElementById("subscriptionForm");

// Select Plan
planCards.forEach(card => {
  card.querySelector(".select-plan-btn").addEventListener("click", () => {
    const plan = card.dataset.plan;
    const price = card.dataset.price;
    currentPlan.textContent = `${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan - $${price} / mo`;

    localStorage.setItem("currentPlan", JSON.stringify({ plan, price }));
    alert(`✅ You have selected the ${plan} plan!`);
  });
});

// Cancel Subscription
cancelSubscriptionBtn.addEventListener("click", () => {
  if (confirm("⚠ Are you sure you want to cancel your subscription?")) {
    currentPlan.textContent = "No Active Subscription";
    localStorage.removeItem("currentPlan");
    alert("Your subscription has been canceled.");
  }
});

// Save Preferences
subscriptionForm.addEventListener("submit", e => {
  e.preventDefault();

  const autoRenew = document.getElementById("autoRenew").checked;
  localStorage.setItem("autoRenew", autoRenew);

  alert("💾 Subscription settings saved!");
});

// Load Preferences
window.addEventListener("DOMContentLoaded", () => {
  const savedPlan = JSON.parse(localStorage.getItem("currentPlan"));
  const autoRenew = localStorage.getItem("autoRenew") === "true";

  if (savedPlan) {
    currentPlan.textContent = `${savedPlan.plan.charAt(0).toUpperCase() + savedPlan.plan.slice(1)} Plan - $${savedPlan.price} / mo`;
  }

  document.getElementById("autoRenew").checked = autoRenew;
});



// Delete Account JS
const deleteForm = document.getElementById("deleteForm");
const deleteModal = document.getElementById("deleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

deleteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("deletePassword").value;
  const confirmed = document.getElementById("deleteConfirm").checked;

  if (!password || !confirmed) {
    alert("Please enter your password and confirm the checkbox before proceeding.");
    return;
  }

  // Show confirmation modal
  deleteModal.style.display = "flex";
});

cancelDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
});

confirmDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
  alert("Your account has been deleted permanently. Goodbye 👋");
  // TODO: Replace alert with backend API call
});

