const cities = [
  { name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80" },
  { name: "Dehradun", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80" },
  { name: "Bangalore", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80" },
  { name: "Manali", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80" }
];

const categories = [
  { name: "Indoor", icon: "home" },
  { name: "Outdoor", icon: "trees" },
  { name: "Wedding", icon: "gem" },
  { name: "Birthday", icon: "cake" },
  { name: "Corporate", icon: "briefcase-business" },
  { name: "Private Party", icon: "sparkles" }
];

let venues = [
  {
    id: "ivory-estate",
    name: "The Ivory Estate",
    city: "Delhi",
    address: "Chattarpur Farms, New Delhi, Delhi",
    location: "Delhi, India",
    category: ["Wedding", "Corporate", "Private Party", "Outdoor", "Indoor"],
    capacity: 650,
    price: 425000,
    space: "Indoor + Outdoor",
    status: "approved",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1300&q=82",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80"
    ],
    booked: ["2026-05-12", "2026-05-13", "2026-05-18", "2026-06-02"],
    map: "https://www.google.com/maps?q=Chattarpur%20Delhi&output=embed"
  },
  {
    id: "cedar-courtyard",
    name: "Cedar Courtyard",
    city: "Dehradun",
    address: "Rajpur Road, Dehradun, Uttarakhand",
    location: "Dehradun, India",
    category: ["Birthday", "Private Party", "Outdoor"],
    capacity: 280,
    price: 165000,
    space: "Outdoor",
    status: "approved",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1300&q=82",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?auto=format&fit=crop&w=900&q=80"
    ],
    booked: ["2026-05-09", "2026-05-22", "2026-06-10"],
    map: "https://www.google.com/maps?q=Rajpur%20Road%20Dehradun&output=embed"
  },
  {
    id: "aurora-banquet",
    name: "Aurora Banquet",
    city: "Bangalore",
    address: "Indiranagar, Bengaluru, Karnataka",
    location: "Bangalore, India",
    category: ["Corporate", "Wedding", "Indoor"],
    capacity: 900,
    price: 520000,
    space: "Indoor",
    status: "approved",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1300&q=82",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=80"
    ],
    booked: ["2026-05-14", "2026-05-15", "2026-05-29"],
    map: "https://www.google.com/maps?q=Indiranagar%20Bengaluru&output=embed"
  },
  {
    id: "snowline-retreat",
    name: "Snowline Retreat",
    city: "Manali",
    address: "Old Manali Road, Manali, Himachal Pradesh",
    location: "Manali, India",
    category: ["Wedding", "Private Party", "Outdoor"],
    capacity: 180,
    price: 235000,
    space: "Indoor + Outdoor",
    status: "approved",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=82",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80"
    ],
    booked: ["2026-05-20", "2026-06-04", "2026-06-05"],
    map: "https://www.google.com/maps?q=Old%20Manali&output=embed"
  }
];

let adminVenues = [
  { id: "riverstone", name: "Riverstone Pavilion", city: "Dehradun", owner: "Aarav Mehta", status: "pending", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80" },
  { id: "skyline", name: "Skyline Social Hall", city: "Bangalore", owner: "Nisha Rao", status: "pending", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80" },
  { id: "orchid", name: "Orchid House", city: "Delhi", owner: "Kabir Sethi", status: "approved", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80" }
];

let conversations = [
  {
    id: "ivory-estate",
    name: "The Ivory Estate",
    image: venues[0].image,
    messages: [
      { mine: false, text: "Hello, The Ivory Estate is available for selected May dates.", time: "10:24 AM" },
      { mine: true, text: "Can you support a wedding setup for 450 guests?", time: "10:25 AM" },
      { mine: false, text: "Yes. We can include decor, stage, valet, catering, and an indoor backup plan.", time: "10:26 AM" }
    ]
  },
  {
    id: "aurora-banquet",
    name: "Aurora Banquet",
    image: venues[2].image,
    messages: [
      { mine: false, text: "We have two corporate slots open next week.", time: "9:11 AM" },
      { mine: true, text: "Please share the AV and lighting details.", time: "9:13 AM" }
    ]
  }
];

let selectedVenue = venues[0];
let activeConversation = conversations[0];
let calendarMonth = new Date(2026, 4, 1);
let selectedDates = [];
let currentSession = { authRole: null, viewRole: null };
let users = [];
let bookings = [];
let reviews = [];
let fileBackendReady = false;
let ownerProfile = {
  displayName: "Ivory Estate Co.",
  username: "@ivoryestate.delhi",
  email: "owner@venuehub.local",
  phone: "+91 98765 43210",
  bio: "Premium wedding, corporate, and private event venues across Delhi NCR with in-house styling, operations, guest management, and weather-safe planning."
};
let lastDataSignature = "";

const publicRoutes = new Set(["home"]);
const ownerRoutes = new Set(["owner", "ownerProfile"]);
const signedRoutes = new Set(["search", "profile", "booking", "chat"]);
const roleLabels = {
  user: "User",
  client: "Client",
  owner: "Venue Owner",
  admin: "Admin"
};

const rupee = value => new Intl.NumberFormat("en-IN").format(value);
const qs = selector => document.querySelector(selector);
const qsa = selector => [...document.querySelectorAll(selector)];

async function init() {
  await loadFileData();
  renderCities();
  renderCategories();
  hydrateFilters();
  renderVenues(true);
  renderProfile(selectedVenue);
  renderCalendar();
  renderConversations();
  renderMessages();
  renderOwnerProfile();
  renderAdmin();
  bindEvents();
  updateAuthUI();
  routeFromHash();
  startLiveSync();
  setTimeout(() => {
    qs("#skeletonGrid").classList.add("hidden");
    qs("#venueGrid").classList.remove("hidden");
  }, 650);
  lucide.createIcons();
}

function startLiveSync() {
  if (!fileBackendReady) return;
  setInterval(() => refreshFileData(), 2500);
}

async function refreshFileData({ forceRender = false } = {}) {
  if (!fileBackendReady) return;

  try {
    const data = await apiRequest("/api/data");
    const signature = JSON.stringify({
      users: data.users,
      venues: data.venues,
      bookings: data.bookings,
      reviews: data.reviews,
      chats: data.chats,
      ownerProfile: data.ownerProfile
    });

    if (!forceRender && signature === lastDataSignature) return;

    lastDataSignature = signature;
    users = data.users || [];
    adminVenues = data.venues || [];
    bookings = data.bookings || [];
    reviews = data.reviews || [];
    conversations = data.chats?.length ? data.chats : conversations;
    ownerProfile = data.ownerProfile || ownerProfile;

    const refreshedVenue = allPublicVenues().find(venue => venue.id === selectedVenue?.id);
    if (refreshedVenue) selectedVenue = refreshedVenue;
    activeConversation = conversations.find(item => item.id === activeConversation?.id) || conversations[0] || activeConversation;

    renderLiveSections();
  } catch (error) {
    console.warn(error);
  }
}

function renderLiveSections() {
  const activePage = qs(".page.active")?.id;
  hydrateFilters();
  if (activePage === "search") renderVenues();
  if (activePage === "profile") renderProfile(selectedVenue);
  if (activePage === "booking") renderCalendar();
  if (activePage === "chat") {
    renderConversations();
    renderMessages();
  }
  if (activePage === "ownerProfile") renderOwnerProfile();
  if (activePage === "admin") renderAdmin();
}

async function loadFileData() {
  if (!location.protocol.startsWith("http")) {
    toast("Run startVenueHub.bat to save prototype data into desktop files.");
    return;
  }

  try {
    const data = await apiRequest("/api/data");
    users = data.users || [];
    adminVenues = data.venues || adminVenues;
    bookings = data.bookings || [];
    reviews = data.reviews || [];
    conversations = data.chats?.length ? data.chats : conversations;
    ownerProfile = data.ownerProfile || ownerProfile;
    lastDataSignature = JSON.stringify(data);
    selectedVenue = allPublicVenues()[0] || venues[0];
    activeConversation = conversations[0] || activeConversation;
    fileBackendReady = true;
  } catch (error) {
    console.warn(error);
    toast("Local file server unavailable. Changes will stay in browser memory.");
  }
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed: ${response.status}`);
  }

  return response.json();
}

function allPublicVenues() {
  return [...venues, ...adminVenues]
    .filter(venue => venue.status === "approved")
    .map(normalizeVenue);
}

function normalizeVenue(venue) {
  return {
    address: venue.address || `${venue.city || "Venue city"}, India`,
    location: venue.location || `${venue.city || "India"}, India`,
    category: venue.category || ["Wedding", "Private Party", "Indoor"],
    capacity: Number(venue.capacity || venue.maxGuests || 250),
    price: Number(venue.price || venue.pricePerDay || 150000),
    space: venue.space || venue.spaceType || "Indoor + Outdoor",
    image: venue.image || "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=82",
    gallery: venue.gallery || [
      venue.image || "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"
    ],
    booked: venue.booked || [],
    map: venue.map || `https://www.google.com/maps?q=${encodeURIComponent(venue.city || "India")}&output=embed`,
    ...venue
  };
}

function bindEvents() {
  qsa("[data-route]").forEach(el => el.addEventListener("click", event => {
    event.preventDefault();
    showPage(el.dataset.route);
  }));

  qs("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    lucide.createIcons();
  });

  qsa("[data-open-auth]").forEach(el => el.addEventListener("click", () => openAuthModal()));
  qs("#closeAuth").addEventListener("click", () => qs("#authModal").close());
  qs("#authForm").addEventListener("submit", submitAuth);
  qs("#adminPasscode").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      unlockAdmin();
    }
  });
  qs("#roleSwitcher").addEventListener("change", switchAdminView);
  qs("#signOutBtn").addEventListener("click", signOut);
  qsa(".role-card input").forEach(input => input.addEventListener("change", syncRoleCards));
  qs("#globalSearch").addEventListener("input", () => renderVenues());
  qs("#locationFilter").addEventListener("change", () => renderVenues());
  qs("#eventFilter").addEventListener("change", () => renderVenues());
  qs("#capacityFilter").addEventListener("input", event => {
    qs("#capacityValue").textContent = event.target.value;
    renderVenues();
  });
  qs("#priceFilter").addEventListener("input", event => {
    qs("#priceValue").textContent = rupee(Number(event.target.value));
    renderVenues();
  });
  qs("#resetFilters").addEventListener("click", resetFilters);
  qs("#prevMonth").addEventListener("click", () => changeMonth(-1));
  qs("#nextMonth").addEventListener("click", () => changeMonth(1));
  qs("#bookingForm").addEventListener("submit", submitBooking);
  qs("#reviewForm").addEventListener("submit", submitReview);
  qs("#venueForm").addEventListener("submit", submitVenue);
  qs("#chatForm").addEventListener("submit", submitMessage);
  qsa("[data-owner-action]").forEach(button => button.addEventListener("click", handleOwnerAction));
  qs("#closeOwnerProfile").addEventListener("click", () => qs("#ownerProfileModal").close());
  qs("#ownerProfileForm").addEventListener("submit", saveOwnerProfile);
  window.addEventListener("hashchange", routeFromHash);
}

function showPage(pageId, skipGuard = false) {
  if (!skipGuard && !canAccessRoute(pageId)) {
    handleBlockedRoute(pageId);
    return;
  }
  qsa(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  qsa(".nav-links a").forEach(link => link.classList.toggle("active", link.dataset.route === pageId));
  history.replaceState(null, "", `#${pageId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

function routeFromHash() {
  const hash = location.hash.replace("#", "");
  showPage(hash && qs(`#${hash}`) ? hash : "home");
}

function getEffectiveRole() {
  if (!currentSession.authRole) return null;
  return currentSession.authRole === "admin" ? currentSession.viewRole || "admin" : currentSession.authRole;
}

function canAccessRoute(pageId) {
  const role = getEffectiveRole();
  if (publicRoutes.has(pageId)) return true;
  if (pageId === "admin") return role === "admin";
  if (ownerRoutes.has(pageId)) return role === "owner";
  if (signedRoutes.has(pageId)) return Boolean(role);
  return Boolean(role);
}

function handleBlockedRoute(pageId) {
  if (!currentSession.authRole) {
    showPage("home", true);
    openAuthModal();
    toast("Please log in to continue.");
    return;
  }
  if (pageId === "admin") {
    toast("Admin access is restricted to admin accounts.");
  } else if (ownerRoutes.has(pageId)) {
    toast("This area is available to venue owners.");
  } else {
    toast("Your current role cannot access that area.");
  }
  showPage(getDefaultRoute(), true);
}

function getDefaultRoute() {
  const role = getEffectiveRole();
  if (role === "admin") return "admin";
  if (role === "owner") return "ownerProfile";
  if (role === "user" || role === "client") return "search";
  return "home";
}

function openAuthModal() {
  const modal = qs("#authModal");
  if (!modal.open) modal.showModal();
}

async function submitAuth(event) {
  event.preventDefault();
  if (event.submitter?.value === "admin") {
    unlockAdmin();
    return;
  }
  const formData = new FormData(event.currentTarget);
  const role = formData.get("role") || "user";
  const credentials = getLoginCredentials();
  if (!credentials) return;

  if (fileBackendReady) {
    await refreshFileData({ forceRender: true });
  }

  let existingUser = findUserByEmail(credentials.email, role) || findUserByEmail(credentials.email);
  if (existingUser) {
    if (!validateExistingUser(existingUser, credentials, role)) return;
    if (!existingUser.password) {
      existingUser = await rememberExistingPassword(existingUser, credentials.password);
    }
    signInAs(role, credentials.email, existingUser);
    qs("#authModal").close();
    showPage(role === "owner" ? getOwnerDestination() : "search");
    return;
  }

  const existingOwnerVenues = role === "owner" ? getOwnerListingsByEmail(credentials.email) : [];
  const savedUser = await saveUserRegistration({
    email: credentials.email,
    password: credentials.password,
    role,
    status: existingOwnerVenues.some(venue => venue.status === "approved") ? "registered" : role === "owner" ? "pending" : "registered"
  });
  signInAs(role, credentials.email, savedUser);
  qs("#authModal").close();
  showPage(role === "owner" ? (existingOwnerVenues.length ? "ownerProfile" : "owner") : "search");
  if (role === "owner" && !existingOwnerVenues.length) {
    toast("New owner account created. Add venue details for admin approval.");
  }
}

function unlockAdmin() {
  const passcode = qs("#adminPasscode").value.trim();
  if (!passcode) {
    toast("Enter the admin passcode.");
    qs("#adminPasscode").focus();
    return;
  }
  if (passcode !== "admin12") {
    toast("Incorrect admin passcode.");
    return;
  }
  signInAs("admin", "admin@venuehub.local", { status: "admin" });
  qs("#authModal").close();
  showPage("admin");
}

function findUserByEmail(email, role = null) {
  return users.find(user => {
    const emailMatches = user.email?.toLowerCase() === email.toLowerCase();
    return emailMatches && (!role || user.role === role);
  });
}

function validateExistingUser(user, credentials, requestedRole) {
  if (user.password && user.password !== credentials.password) {
    toast("Incorrect password for this email.");
    return false;
  }

  if (user.role !== requestedRole) {
    toast(`This email is registered as ${roleLabels[user.role] || user.role}.`);
    return false;
  }

  return true;
}

async function rememberExistingPassword(user, password) {
  const updatedUser = { ...user, password };

  if (fileBackendReady) {
    const data = await apiRequest("/api/users", {
      method: "POST",
      body: updatedUser
    });
    users = data.users;
    return data.user;
  }

  users = users.map(item => item.id === user.id ? updatedUser : item);
  return updatedUser;
}

function getOwnerDestination() {
  return getOwnerListings().length ? "ownerProfile" : "owner";
}

function getLoginCredentials() {
  const form = qs("#authForm");
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    form.reportValidity();
    toast("Enter email and password first.");
    return null;
  }

  if (password.length < 8) {
    form.reportValidity();
    toast("Password must be at least 8 characters.");
    return null;
  }

  return { email, password };
}

function signInAs(role, email = `${role}@venuehub.local`, user = {}) {
  currentSession = { authRole: role, viewRole: role, email, userStatus: user.status || "" };
  updateAuthUI();
  toast(`${roleLabels[role]} session active.`);
}

async function saveUserRegistration(user) {
  const registration = {
    id: `user-${Date.now()}`,
    email: user.email,
    password: user.password,
    role: user.role,
    status: user.status || (user.role === "owner" ? "pending" : "registered"),
    createdAt: new Date().toISOString()
  };

  users.unshift(registration);

  if (!fileBackendReady) return registration;

  const data = await apiRequest("/api/users", {
    method: "POST",
    body: registration
  });
  users = data.users;
  return data.user;
}

function signOut() {
  currentSession = { authRole: null, viewRole: null };
  updateAuthUI();
  showPage("home", true);
  toast("Logged out.");
}

function switchAdminView(event) {
  if (currentSession.authRole !== "admin") return;
  currentSession.viewRole = event.target.value;
  updateAuthUI();
  toast(`Admin previewing ${roleLabels[currentSession.viewRole]} mode.`);
  showPage(getDefaultRoute());
}

function updateAuthUI() {
  const role = getEffectiveRole();
  const signedIn = Boolean(currentSession.authRole);
  qs("#loginBtn").classList.toggle("hidden", signedIn);
  qs("#signOutBtn").classList.toggle("hidden", !signedIn);
  qs("#accountPill").classList.toggle("hidden", !signedIn);
  qs("#accountPill").textContent = signedIn ? `${roleLabels[role]} mode` : "";
  qs("#adminSwitcher").classList.toggle("hidden", currentSession.authRole !== "admin");
  qs("#roleSwitcher").value = currentSession.authRole === "admin" ? currentSession.viewRole : "admin";
  qsa("[data-admin-link]").forEach(link => link.classList.toggle("hidden", role !== "admin"));
  qsa("[data-owner-link]").forEach(link => link.classList.toggle("hidden", role !== "owner"));
}

function syncRoleCards() {
  qsa(".role-card").forEach(card => card.classList.toggle("active", card.querySelector("input").checked));
}

function handleOwnerAction(event) {
  event.preventDefault();
  const action = event.currentTarget.dataset.ownerAction;

  if (action === "editProfile") {
    openOwnerProfileEditor();
    return;
  }

  if (action === "manageBookings") {
    showPage("ownerProfile");
    renderOwnerProfile();
    setTimeout(() => {
      const panel = qs("#ownerBookingsPanel");
      panel.scrollIntoView({ behavior: "smooth", block: "center" });
      panel.classList.add("attention");
      setTimeout(() => panel.classList.remove("attention"), 1300);
    }, 80);
    toast("Owner bookings are shown here.");
    return;
  }

  if (action === "ownerInbox") {
    showPage("chat");
    toast("Owner inbox opened.");
  }
}

function openOwnerProfileEditor() {
  qs("#editOwnerDisplayName").value = ownerProfile.displayName || "";
  qs("#editOwnerUsername").value = ownerProfile.username || "";
  qs("#editOwnerEmail").value = ownerProfile.email || currentSession.email || "";
  qs("#editOwnerPhone").value = ownerProfile.phone || "";
  qs("#editOwnerBio").value = ownerProfile.bio || "";
  const modal = qs("#ownerProfileModal");
  if (!modal.open) modal.showModal();
}

async function saveOwnerProfile(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const username = formData.get("username") || "@venuehub.owner";
  ownerProfile = {
    displayName: formData.get("displayName") || "Venue Owner",
    username: username.startsWith("@") ? username : `@${username}`,
    email: formData.get("email") || currentSession.email || "owner@venuehub.local",
    phone: formData.get("phone") || "",
    bio: formData.get("bio") || ""
  };

  if (fileBackendReady) {
    const data = await apiRequest("/api/owner-profile", {
      method: "PATCH",
      body: ownerProfile
    });
    ownerProfile = data.ownerProfile;
  }

  renderOwnerProfile();
  qs("#ownerProfileModal").close();
  toast("Owner profile updated and saved.");
}

function renderOwnerProfile() {
  const ownerListings = getOwnerListings();
  const pending = ownerListings.filter(venue => venue.status === "pending").length;
  const ownerBookings = getOwnerBookings(ownerListings);
  const ownerReviews = getOwnerReviews(ownerListings);
  const ownerAverage = averageRating(ownerReviews);
  const profileBelongsToSession = ownerProfile.email?.toLowerCase() === currentSession.email?.toLowerCase();
  const displayName = profileBelongsToSession ? ownerProfile.displayName : ownerListings[0]?.owner || currentSession.email || ownerProfile.displayName;
  const username = profileBelongsToSession ? ownerProfile.username : `@${(displayName || "owner").replace(/[^a-z0-9]+/gi, "").toLowerCase() || "owner"}`;
  const bio = profileBelongsToSession ? ownerProfile.bio : "Your venue listings and approval status are shown here.";

  qs("#ownerDisplayName").textContent = displayName;
  qs("#ownerUsername").textContent = username;
  qs("#ownerBio").textContent = bio;

  qs("#ownerStats").innerHTML = `
    <span><strong>${ownerListings.length}</strong> listings</span>
    <span><strong>${ownerBookings.length}</strong> bookings</span>
    <span><strong>${ownerAverage ? ownerAverage.toFixed(1) : "0.0"}</strong> rating</span>
    <span><strong>12m</strong> avg reply</span>
  `;
  qs("#ownerPendingCount").textContent = `${pending} pending`;
  qs("#ownerAverageRating").textContent = `${ownerAverage ? ownerAverage.toFixed(1) : "0.0"} avg`;

  qs("#ownerListingList").innerHTML = ownerListings.length ? ownerListings.map(venue => `
    <div class="owner-listing">
      <span class="owner-listing-img" style="background-image:url('${venue.image}')"></span>
      <div>
        <strong>${venue.name}</strong>
        <p>${venue.status === "approved" ? "Approved - visible publicly" : venue.status === "rejected" ? "Rejected by admin" : "Waiting for admin verification"}</p>
      </div>
      <span class="status-pill ${venue.status === "approved" ? "verified" : venue.status}">${venue.status === "approved" ? "Live" : venue.status}</span>
    </div>
  `).join("") : `
    <div class="empty-state compact">
      <i data-lucide="building-2"></i>
      <h3>No listings yet</h3>
      <p>Add a venue to create your first owner listing.</p>
    </div>
  `;

  qs("#ownerBookingList").innerHTML = ownerBookings.length ? ownerBookings.map(booking => `
    <div class="mini-booking">
      <span>${booking.fromDate} to ${booking.toDate}</span>
      <strong>${booking.eventType}, ${booking.guests} guests</strong>
      <p>${booking.venueName} - ${booking.status}</p>
    </div>
  `).join("") : `
    <div class="empty-state compact">
      <i data-lucide="calendar-x"></i>
      <h3>No bookings yet</h3>
      <p>Bookings made from venue pages will appear here.</p>
    </div>
  `;

  qs("#ownerReviewList").innerHTML = ownerReviews.length ? ownerReviews.map(review => reviewCard(review)).join("") : `
    <div class="empty-state compact">
      <i data-lucide="star"></i>
      <h3>No reviews yet</h3>
      <p>Client ratings for your venues will appear here.</p>
    </div>
  `;

  lucide.createIcons();
}

function getOwnerListings() {
  if (!currentSession.email) return [];

  const savedListings = getOwnerListingsByEmail(currentSession.email);

  return savedListings.filter((venue, index, rows) => rows.findIndex(item => item.id === venue.id) === index);
}

function getOwnerListingsByEmail(email) {
  return adminVenues.filter(venue => {
    return venue.ownerEmail?.toLowerCase() === email.toLowerCase()
      || venue.owner?.toLowerCase() === email.toLowerCase();
  });
}

function getOwnerBookings(ownerListings = getOwnerListings()) {
  const listingIds = new Set(ownerListings.map(venue => venue.id));
  const listingNames = new Set(ownerListings.map(venue => venue.name));
  return bookings.filter(booking => listingIds.has(booking.venueId) || listingNames.has(booking.venueName));
}

function getOwnerReviews(ownerListings = getOwnerListings()) {
  const listingIds = new Set(ownerListings.map(venue => venue.id));
  const listingNames = new Set(ownerListings.map(venue => venue.name));
  return reviews.filter(review => listingIds.has(review.venueId) || listingNames.has(review.venueName));
}

function renderCities() {
  qs("#cityGrid").innerHTML = cities.map(city => `
    <button class="city-card" style="--image:url('${city.image}')" data-city="${city.name}">
      <strong>${city.name}</strong>
    </button>
  `).join("");
  qsa(".city-card").forEach(card => {
    card.addEventListener("click", () => {
      qs("#locationFilter").value = card.dataset.city;
      renderVenues();
      showPage("search");
    });
  });
}

function renderCategories() {
  qs("#categoryGrid").innerHTML = categories.map(category => `
    <button class="category-card" data-category="${category.name}">
      <i data-lucide="${category.icon}"></i>
      <strong>${category.name}</strong>
    </button>
  `).join("");
  qsa(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      qs("#eventFilter").value = card.dataset.category;
      renderVenues();
      showPage("search");
    });
  });
}

function hydrateFilters() {
  const selectedCity = qs("#locationFilter").value;
  const selectedEvent = qs("#eventFilter").value;
  const cityOptions = [...new Set(allPublicVenues().map(venue => venue.city).filter(Boolean))].map(city => `<option>${city}</option>`).join("");
  const eventOptions = categories.map(category => `<option>${category.name}</option>`).join("");
  qs("#locationFilter").innerHTML = `<option value="">All cities</option>${cityOptions}`;
  qs("#eventFilter").innerHTML = `<option value="">All events</option>${eventOptions}`;
  qs("#locationFilter").value = selectedCity;
  qs("#eventFilter").value = selectedEvent;
  qs("#priceValue").textContent = rupee(Number(qs("#priceFilter").value));
}

function filteredVenues() {
  const term = qs("#globalSearch").value.trim().toLowerCase();
  const location = qs("#locationFilter").value;
  const eventType = qs("#eventFilter").value;
  const capacity = Number(qs("#capacityFilter").value);
  const price = Number(qs("#priceFilter").value);
  return allPublicVenues().filter(venue => {
    const searchable = `${venue.name} ${venue.city} ${venue.category.join(" ")} ${venue.space}`.toLowerCase();
    return venue.status === "approved"
      && (!term || searchable.includes(term))
      && (!location || venue.city === location)
      && (!eventType || venue.category.includes(eventType))
      && venue.capacity <= capacity
      && venue.price <= price;
  });
}

function renderVenues(initial = false) {
  const matches = filteredVenues();
  const grid = qs("#venueGrid");
  grid.classList.toggle("hidden", initial);
  grid.innerHTML = matches.map(venue => `
    <article class="venue-card">
      <div class="venue-card-image" style="--image:url('${venue.image}')">
        <span class="status-pill verified"><i data-lucide="badge-check"></i> Verified</span>
      </div>
      <div class="venue-card-body">
        <h3>${venue.name}</h3>
        <div class="venue-meta">
          <span><i data-lucide="map-pin"></i>${venue.city}</span>
          <span><i data-lucide="users"></i>Up to ${venue.capacity}</span>
          <span><i data-lucide="building-2"></i>${venue.space}</span>
        </div>
        <div class="venue-card-footer">
          <span class="price">Rs ${rupee(venue.price)}</span>
          <button class="btn btn-primary" data-view="${venue.id}">View</button>
        </div>
      </div>
    </article>
  `).join("");
  qs("#resultCount").textContent = `${matches.length} venue${matches.length === 1 ? "" : "s"} found`;
  qs("#emptyState").classList.toggle("hidden", matches.length > 0);
  qsa("[data-view]").forEach(btn => btn.addEventListener("click", () => {
    selectedVenue = allPublicVenues().find(venue => venue.id === btn.dataset.view);
    renderProfile(selectedVenue);
    renderCalendar();
    showPage("profile");
  }));
  lucide.createIcons();
}

function resetFilters() {
  qs("#globalSearch").value = "";
  qs("#locationFilter").value = "";
  qs("#eventFilter").value = "";
  qs("#capacityFilter").value = 1200;
  qs("#capacityValue").textContent = "1200";
  qs("#priceFilter").value = 900000;
  qs("#priceValue").textContent = rupee(900000);
  renderVenues();
}

function renderProfile(venue) {
  qs("#profileName").textContent = venue.name;
  qs("#profileLocation").textContent = `${venue.location} - Up to ${venue.capacity} guests`;
  qs("#profilePrice").textContent = `Rs ${rupee(venue.price)}`;
  qs("#profileAddress").textContent = venue.address;
  qs("#mapFrame").src = venue.map;
  qs("#bookingVenueName").textContent = `Book ${venue.name}`;
  qs("#profileGallery").innerHTML = venue.gallery.map(img => `<button style="--img:url('${img}')" aria-label="Venue gallery image"></button>`).join("");
  const details = [
    ["home", "Space Details", `${venue.space} availability with configurable lounge, dining, and stage zones.`],
    ["indian-rupee", "Logistics & Cost", `Base pricing starts at Rs ${rupee(venue.price)} with decor, catering, valet, and overtime billed separately.`],
    ["shield", "Staffing & Security", "Dedicated event manager, service crew, entry control, and guest movement support."],
    ["cloud-sun", "Weather Handling", "Tent coverage, indoor shift plans, rain-safe electrical routing, and backup seating layouts."],
    ["audio-lines", "Technical Arrangements", "Sound system, lighting truss, stage setup, projector, microphones, and power backup."],
    ["party-popper", "Services Provided", venue.category.join(", ")],
  ];
  qs("#detailGrid").innerHTML = details.map(([icon, title, text]) => `
    <div class="detail-item">
      <i data-lucide="${icon}"></i>
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `).join("");
  renderVenueReviews(venue);
  lucide.createIcons();
}

function getVenueReviews(venueId) {
  return reviews.filter(review => review.venueId === venueId);
}

function renderVenueReviews(venue) {
  const venueReviews = getVenueReviews(venue.id);
  const average = averageRating(venueReviews);
  const role = getEffectiveRole();
  const canReview = role === "client";

  qs("#reviewSummary").textContent = venueReviews.length
    ? `${average.toFixed(1)} average from ${venueReviews.length} client review${venueReviews.length === 1 ? "" : "s"}.`
    : "No client reviews yet.";

  qs("#venueReviewList").innerHTML = venueReviews.length ? venueReviews.map(review => reviewCard(review)).join("") : `
    <div class="empty-state compact">
      <i data-lucide="star"></i>
      <h3>No reviews yet</h3>
      <p>Client reviews for this venue will appear here.</p>
    </div>
  `;

  qs("#reviewForm").classList.toggle("muted-panel", !canReview);
  qs("#reviewForm").querySelectorAll("input, select, textarea, button").forEach(control => {
    control.disabled = !canReview;
  });
  qs("#reviewNote").textContent = canReview
    ? "Your review will be saved to data/reviews.json and visible to the owner."
    : "Only Client accounts can add reviews. Log in as Client to post feedback.";
}

function reviewCard(review) {
  return `
    <article class="review-card">
      <div class="rating-stars">${"★".repeat(Number(review.rating))}${"☆".repeat(5 - Number(review.rating))}</div>
      <strong>${review.clientName || "Client"}</strong>
      <p>${review.description}</p>
      <span>${review.venueName} - ${new Date(review.createdAt).toLocaleDateString("en-IN")}</span>
    </article>
  `;
}

function averageRating(rows) {
  if (!rows.length) return 0;
  return rows.reduce((sum, review) => sum + Number(review.rating || 0), 0) / rows.length;
}

function changeMonth(offset) {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + offset, 1);
  renderCalendar();
}

function renderCalendar() {
  selectedDates = [];
  updateDateSummary();
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  qs("#calendarLabel").textContent = calendarMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => `<div class="day-name">${day}</div>`).join("");
  const blanks = Array.from({ length: firstDay }, () => `<button class="date-cell muted" disabled></button>`).join("");
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(year, month, index + 1);
    const iso = toIso(date);
    const booked = selectedVenue.booked.includes(iso);
    return `<button class="date-cell ${booked ? "booked" : ""}" ${booked ? "disabled" : ""} data-date="${iso}">${index + 1}</button>`;
  }).join("");
  qs("#calendar").innerHTML = names + blanks + days;
  qsa("[data-date]").forEach(cell => cell.addEventListener("click", () => selectDate(cell.dataset.date)));
}

function selectDate(iso) {
  if (selectedDates.length >= 2) selectedDates = [];
  selectedDates.push(iso);
  selectedDates.sort();
  qsa(".date-cell").forEach(cell => cell.classList.toggle("selected", selectedDates.includes(cell.dataset.date)));
  updateDateSummary();
}

function updateDateSummary() {
  qs("#fromDate").textContent = selectedDates[0] || "Select";
  qs("#toDate").textContent = selectedDates[1] || selectedDates[0] || "Select";
}

function toIso(date) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10);
}

async function submitBooking(event) {
  event.preventDefault();
  if (!selectedDates.length) {
    toast("Select at least one available date first.");
    return;
  }
  const formData = new FormData(event.target);
  const booking = {
    id: `booking-${Date.now()}`,
    venueId: selectedVenue.id,
    venueName: selectedVenue.name,
    owner: selectedVenue.owner || "Venue owner",
    clientEmail: currentSession.email || formData.get("email"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    eventType: formData.get("eventType"),
    guests: Number(formData.get("guests") || 0),
    services: formData.getAll("services"),
    fromDate: selectedDates[0],
    toDate: selectedDates[1] || selectedDates[0],
    status: "incomplete",
    createdAt: new Date().toISOString()
  };

  bookings.unshift(booking);
  selectedVenue.booked = [...new Set([...(selectedVenue.booked || []), ...selectedDates])];

  if (fileBackendReady) {
    const data = await apiRequest("/api/bookings", {
      method: "POST",
      body: booking
    });
    bookings = data.bookings;
  }

  renderOwnerProfile();
  renderAdmin();
  renderCalendar();
  qs("#bookingNote").textContent = "Booking saved to data/bookings.json with status = incomplete.";
  toast("Booking saved in local file.");
  event.target.reset();
}

async function submitReview(event) {
  event.preventDefault();

  if (getEffectiveRole() !== "client") {
    toast("Only Client accounts can add ratings and reviews.");
    return;
  }

  const formData = new FormData(event.target);
  const review = {
    id: `review-${Date.now()}`,
    venueId: selectedVenue.id,
    venueName: selectedVenue.name,
    ownerEmail: selectedVenue.ownerEmail || selectedVenue.owner || "",
    clientEmail: currentSession.email,
    clientName: formData.get("clientName"),
    rating: Number(formData.get("rating")),
    description: formData.get("description"),
    status: "visible",
    createdAt: new Date().toISOString()
  };

  reviews.unshift(review);

  if (fileBackendReady) {
    const data = await apiRequest("/api/reviews", {
      method: "POST",
      body: review
    });
    reviews = data.reviews;
  }

  renderVenueReviews(selectedVenue);
  renderOwnerProfile();
  renderAdmin();
  event.target.reset();
  toast("Review saved and visible to the venue owner.");
}

function renderConversations() {
  qs("#conversationList").innerHTML = conversations.map(item => `
    <button class="conversation ${item.id === activeConversation.id ? "active" : ""}" data-conversation="${item.id}">
      <span class="avatar" style="--img:url('${item.image}')"></span>
      <span>
        <strong>${item.name}</strong>
        <span>${item.messages.at(-1).text}</span>
      </span>
    </button>
  `).join("");
  qsa("[data-conversation]").forEach(button => button.addEventListener("click", () => {
    activeConversation = conversations.find(item => item.id === button.dataset.conversation);
    renderConversations();
    renderMessages();
  }));
}

function renderMessages() {
  qs("#chatVenueName").textContent = activeConversation.name;
  qs("#messages").innerHTML = activeConversation.messages.map(message => `
    <div class="message ${message.mine ? "mine" : ""}">
      ${message.text}
      <time>${message.time}</time>
    </div>
  `).join("");
  qs("#messages").scrollTop = qs("#messages").scrollHeight;
}

async function submitMessage(event) {
  event.preventDefault();
  const input = qs("#messageInput");
  const text = input.value.trim();
  if (!text) return;
  const message = { mine: true, text, time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }), createdAt: new Date().toISOString() };
  activeConversation.messages.push(message);
  input.value = "";

  if (fileBackendReady) {
    const data = await apiRequest(`/api/chats/${activeConversation.id}/messages`, {
      method: "POST",
      body: message
    });
    conversations = data.chats;
    activeConversation = conversations.find(item => item.id === activeConversation.id) || conversations[0];
  }

  renderMessages();
  renderConversations();
  setTimeout(() => {
    activeConversation.messages.push({ mine: false, text: "Thanks. I am checking availability and will confirm the package details.", time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) });
    renderMessages();
    renderConversations();
    toast("New owner reply received.");
  }, 900);
}

async function submitVenue(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const venueName = formData.get("venueName") || "New Venue";
  const city = formData.get("city") || "Pending city";
  const venue = {
    id: `pending-${Date.now()}`,
    name: venueName,
    city,
    owner: currentSession.email || "Venue owner",
    ownerEmail: currentSession.email || "owner@venuehub.local",
    description: formData.get("description") || "",
    address: formData.get("address") || city,
    map: formData.get("maps") || `https://www.google.com/maps?q=${encodeURIComponent(city)}&output=embed`,
    coordinates: formData.get("coordinates") || "",
    capacity: Number(formData.get("maxGuests") || 250),
    minGuests: Number(formData.get("minGuests") || 20),
    maxGuests: Number(formData.get("maxGuests") || 250),
    price: Number(formData.get("price") || 150000),
    pricePerDay: Number(formData.get("price") || 150000),
    category: ["Wedding", "Birthday", "Corporate", "Private Party"],
    space: formData.get("space") || "Indoor + Outdoor",
    spaceType: formData.get("space") || "Indoor + Outdoor",
    facilities: ["Catering", "Decoration", "Parking", "DJ"],
    status: "pending",
    registrationStatus: "pending",
    createdAt: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80"
  };
  adminVenues.unshift(venue);

  if (fileBackendReady) {
    const data = await apiRequest("/api/venues", {
      method: "POST",
      body: venue
    });
    adminVenues = data.venues;
  }

  renderOwnerProfile();
  renderAdmin();
  qs("#venueSubmitNote").textContent = "Venue saved to data/venues.json with status = pending. Admin approval will update the same file row.";
  toast("Venue registration saved as pending.");
  event.target.reset();
  showPage("ownerProfile");
}

function renderAdmin() {
  const pending = adminVenues.filter(venue => venue.status === "pending").length;
  const verified = adminVenues.filter(venue => venue.status === "approved").length + venues.length;
  qs("#pendingCount").textContent = `${pending} pending`;
  qs("#verifiedCount").textContent = verified;
  qs("#bookingCount").textContent = bookings.length;
  qs("#reviewCount").textContent = reviews.length;
  qs("#adminList").innerHTML = adminVenues.map(venue => `
    <article class="admin-card">
      <span class="admin-thumb" style="--img:url('${venue.image}')"></span>
      <div>
        <span class="status-pill ${venue.status === "approved" ? "verified" : venue.status}">${venue.status}</span>
        <h3>${venue.name}</h3>
        <p>${venue.city} - Owner: ${venue.owner}</p>
      </div>
      <div class="admin-actions">
        <button class="btn btn-primary" data-admin="approve" data-admin-id="${venue.id}" ${venue.status === "approved" ? "disabled" : ""}>Approve</button>
        <button class="btn btn-soft" data-admin="reject" data-admin-id="${venue.id}" ${venue.status === "rejected" ? "disabled" : ""}>Reject</button>
      </div>
    </article>
  `).join("");
  qs("#adminBookingList").innerHTML = bookings.length ? bookings.map(booking => `
    <article class="admin-card booking-row">
      <span class="admin-thumb booking-thumb"><i data-lucide="calendar-check"></i></span>
      <div>
        <span class="status-pill ${booking.status === "completed" ? "verified" : "pending"}">${booking.status}</span>
        <h3>${booking.venueName}</h3>
        <p>${booking.eventType} - ${booking.fromDate} to ${booking.toDate} - ${booking.guests} guests</p>
      </div>
      <div class="admin-actions">
        <button class="btn btn-primary" data-booking-status="completed" data-booking-id="${booking.id}" ${booking.status === "completed" ? "disabled" : ""}>Mark completed</button>
        <button class="btn btn-soft" data-booking-status="incomplete" data-booking-id="${booking.id}" ${booking.status === "incomplete" ? "disabled" : ""}>Incomplete</button>
      </div>
    </article>
  `).join("") : `
    <div class="empty-state compact">
      <i data-lucide="calendar-x"></i>
      <h3>No bookings saved yet</h3>
      <p>Bookings submitted from the calendar will appear here and in data/bookings.json.</p>
    </div>
  `;
  qs("#adminReviewList").innerHTML = reviews.length ? reviews.map(review => `
    <article class="admin-card review-row">
      <span class="admin-thumb booking-thumb"><i data-lucide="star"></i></span>
      <div>
        <span class="status-pill live">${Number(review.rating).toFixed(0)} stars</span>
        <h3>${review.venueName}</h3>
        <p>${review.clientName || "Client"} - ${review.description}</p>
      </div>
      <div class="admin-actions">
        <button class="btn btn-soft" data-review-delete="${review.id}">Delete review</button>
      </div>
    </article>
  `).join("") : `
    <div class="empty-state compact">
      <i data-lucide="star"></i>
      <h3>No reviews yet</h3>
      <p>Client ratings and reviews will appear here for moderation.</p>
    </div>
  `;
  qsa("[data-admin]").forEach(button => button.addEventListener("click", async () => {
    const venue = adminVenues.find(item => item.id === button.dataset.adminId);
    venue.status = button.dataset.admin === "approve" ? "approved" : "rejected";
    venue.registrationStatus = venue.status === "approved" ? "registered" : "rejected";
    venue.reviewedAt = new Date().toISOString();

    if (fileBackendReady) {
      const data = await apiRequest(`/api/venues/${venue.id}/status`, {
        method: "PATCH",
        body: { status: venue.status }
      });
      adminVenues = data.venues;
      users = data.users;
    }

    hydrateFilters();
    renderVenues();
    renderOwnerProfile();
    renderAdmin();
    toast(`${venue.name} ${venue.status}. File updated.`);
  }));
  qsa("[data-booking-status]").forEach(button => button.addEventListener("click", async () => {
    const booking = bookings.find(item => item.id === button.dataset.bookingId);
    booking.status = button.dataset.bookingStatus;

    if (fileBackendReady) {
      const data = await apiRequest(`/api/bookings/${booking.id}/status`, {
        method: "PATCH",
        body: { status: booking.status }
      });
      bookings = data.bookings;
    }

    renderAdmin();
    toast(`Booking marked ${booking.status}. File updated.`);
  }));
  qsa("[data-review-delete]").forEach(button => button.addEventListener("click", async () => {
    const reviewId = button.dataset.reviewDelete;
    reviews = reviews.filter(review => review.id !== reviewId);

    if (fileBackendReady) {
      const data = await apiRequest(`/api/reviews/${reviewId}`, {
        method: "DELETE"
      });
      reviews = data.reviews;
    }

    renderVenueReviews(selectedVenue);
    renderOwnerProfile();
    renderAdmin();
    toast("Review deleted from local files.");
  }));
  lucide.createIcons();
}

function toast(message) {
  const el = qs("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

init();
