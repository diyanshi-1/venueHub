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

const venues = [
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

const adminVenues = [
  { id: "riverstone", name: "Riverstone Pavilion", city: "Dehradun", owner: "Aarav Mehta", status: "pending", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80" },
  { id: "skyline", name: "Skyline Social Hall", city: "Bangalore", owner: "Nisha Rao", status: "pending", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80" },
  { id: "orchid", name: "Orchid House", city: "Delhi", owner: "Kabir Sethi", status: "approved", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80" }
];

const conversations = [
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

function init() {
  renderCities();
  renderCategories();
  hydrateFilters();
  renderVenues(true);
  renderProfile(selectedVenue);
  renderCalendar();
  renderConversations();
  renderMessages();
  renderAdmin();
  bindEvents();
  updateAuthUI();
  routeFromHash();
  setTimeout(() => {
    qs("#skeletonGrid").classList.add("hidden");
    qs("#venueGrid").classList.remove("hidden");
  }, 650);
  lucide.createIcons();
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
  qs("#adminLoginBtn").addEventListener("click", unlockAdmin);
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
  qs("#venueForm").addEventListener("submit", submitVenue);
  qs("#chatForm").addEventListener("submit", submitMessage);
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

function submitAuth(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const role = formData.get("role") || "user";
  signInAs(role);
  qs("#authModal").close();
  showPage(role === "owner" ? "ownerProfile" : "search");
}

function unlockAdmin() {
  const passcode = qs("#adminPasscode").value.trim();
  if (passcode !== "venuehub-admin") {
    toast("Incorrect admin passcode.");
    return;
  }
  signInAs("admin");
  qs("#authModal").close();
  showPage("admin");
}

function signInAs(role) {
  currentSession = { authRole: role, viewRole: role };
  updateAuthUI();
  toast(`${roleLabels[role]} session active.`);
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
  const cityOptions = [...new Set(venues.map(venue => venue.city))].map(city => `<option>${city}</option>`).join("");
  const eventOptions = categories.map(category => `<option>${category.name}</option>`).join("");
  qs("#locationFilter").insertAdjacentHTML("beforeend", cityOptions);
  qs("#eventFilter").insertAdjacentHTML("beforeend", eventOptions);
  qs("#priceValue").textContent = rupee(Number(qs("#priceFilter").value));
}

function filteredVenues() {
  const term = qs("#globalSearch").value.trim().toLowerCase();
  const location = qs("#locationFilter").value;
  const eventType = qs("#eventFilter").value;
  const capacity = Number(qs("#capacityFilter").value);
  const price = Number(qs("#priceFilter").value);
  return venues.filter(venue => {
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
    selectedVenue = venues.find(venue => venue.id === btn.dataset.view);
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
  lucide.createIcons();
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

function submitBooking(event) {
  event.preventDefault();
  if (!selectedDates.length) {
    toast("Select at least one available date first.");
    return;
  }
  qs("#bookingNote").textContent = "Booking request created with status = pending. Owner receives a Firestore realtime update.";
  toast("Booking request sent.");
  event.target.reset();
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

function submitMessage(event) {
  event.preventDefault();
  const input = qs("#messageInput");
  const text = input.value.trim();
  if (!text) return;
  activeConversation.messages.push({ mine: true, text, time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) });
  input.value = "";
  renderMessages();
  renderConversations();
  setTimeout(() => {
    activeConversation.messages.push({ mine: false, text: "Thanks. I am checking availability and will confirm the package details.", time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) });
    renderMessages();
    renderConversations();
    toast("New owner reply received.");
  }, 900);
}

function submitVenue(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const venueName = formData.get("venueName") || "New Venue";
  const city = formData.get("city") || "Pending city";
  adminVenues.unshift({
    id: `pending-${Date.now()}`,
    name: venueName,
    city,
    owner: "Ivory Estate Co.",
    status: "pending",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80"
  });
  renderAdmin();
  qs("#venueSubmitNote").textContent = "Venue submitted with status = pending. It will appear publicly only after admin approval.";
  toast("Venue submitted for admin approval.");
  event.target.reset();
  showPage("ownerProfile");
}

function renderAdmin() {
  const pending = adminVenues.filter(venue => venue.status === "pending").length;
  const verified = adminVenues.filter(venue => venue.status === "approved").length + venues.length;
  qs("#pendingCount").textContent = `${pending} pending`;
  qs("#verifiedCount").textContent = verified;
  qs("#adminList").innerHTML = adminVenues.map(venue => `
    <article class="admin-card">
      <span class="admin-thumb" style="--img:url('${venue.image}')"></span>
      <div>
        <span class="status-pill ${venue.status === "approved" ? "verified" : venue.status}">${venue.status}</span>
        <h3>${venue.name}</h3>
        <p>${venue.city} - Owner: ${venue.owner}</p>
      </div>
      <div class="admin-actions">
        <button class="btn btn-primary" data-admin="approve" data-admin-id="${venue.id}">Approve</button>
        <button class="btn btn-soft" data-admin="reject" data-admin-id="${venue.id}">Reject</button>
      </div>
    </article>
  `).join("");
  qsa("[data-admin]").forEach(button => button.addEventListener("click", () => {
    const venue = adminVenues.find(item => item.id === button.dataset.adminId);
    venue.status = button.dataset.admin === "approve" ? "approved" : "rejected";
    renderAdmin();
    toast(`${venue.name} ${venue.status}.`);
  }));
}

function toast(message) {
  const el = qs("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

init();
