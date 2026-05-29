const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");

const defaultData = {
  ownerProfile: {
    displayName: "Ivory Estate Co.",
    username: "@ivoryestate.delhi",
    email: "owner@venuehub.local",
    phone: "+91 98765 43210",
    bio: "Premium wedding, corporate, and private event venues across Delhi NCR with in-house styling, operations, guest management, and weather-safe planning."
  },
  users: [],
  venues: [
    {
      id: "riverstone",
      name: "Riverstone Pavilion",
      city: "Dehradun",
      owner: "Aarav Mehta",
      ownerEmail: "aarav.owner@venuehub.local",
      status: "pending",
      registrationStatus: "pending",
      category: ["Wedding", "Private Party", "Outdoor"],
      capacity: 320,
      price: 185000,
      space: "Outdoor",
      address: "Mussoorie Road, Dehradun, Uttarakhand",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      createdAt: new Date().toISOString()
    },
    {
      id: "skyline",
      name: "Skyline Social Hall",
      city: "Bangalore",
      owner: "Nisha Rao",
      ownerEmail: "nisha.owner@venuehub.local",
      status: "pending",
      registrationStatus: "pending",
      category: ["Corporate", "Birthday", "Indoor"],
      capacity: 500,
      price: 280000,
      space: "Indoor",
      address: "MG Road, Bengaluru, Karnataka",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
      createdAt: new Date().toISOString()
    },
    {
      id: "orchid",
      name: "Orchid House",
      city: "Delhi",
      owner: "Kabir Sethi",
      ownerEmail: "kabir.owner@venuehub.local",
      status: "approved",
      registrationStatus: "registered",
      category: ["Wedding", "Indoor", "Private Party"],
      capacity: 240,
      price: 210000,
      space: "Indoor + Outdoor",
      address: "Saket, New Delhi, Delhi",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
      createdAt: new Date().toISOString()
    }
  ],
  bookings: [],
  reviews: [],
  chats: [
    {
      id: "ivory-estate",
      name: "The Ivory Estate",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=82",
      messages: [
        { mine: false, text: "Hello, The Ivory Estate is available for selected May dates.", time: "10:24 AM" },
        { mine: true, text: "Can you support a wedding setup for 450 guests?", time: "10:25 AM" },
        { mine: false, text: "Yes. We can include decor, stage, valet, catering, and an indoor backup plan.", time: "10:26 AM" }
      ]
    },
    {
      id: "aurora-banquet",
      name: "Aurora Banquet",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=82",
      messages: [
        { mine: false, text: "We have two corporate slots open next week.", time: "9:11 AM" },
        { mine: true, text: "Please share the AV and lighting details.", time: "9:13 AM" }
      ]
    }
  ]
};

const jsonFiles = {
  ownerProfile: "ownerProfile.json",
  users: "users.json",
  venues: "venues.json",
  bookings: "bookings.json",
  reviews: "reviews.json",
  chats: "chats.json"
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function ensureDataFiles() {
  fs.mkdirSync(dataDir, { recursive: true });
  for (const [key, fileName] of Object.entries(jsonFiles)) {
    const filePath = path.join(dataDir, fileName);
    if (!fs.existsSync(filePath)) {
      writeJson(key, defaultData[key]);
    }
  }
  exportCsvFiles();
}

function readJson(key) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, jsonFiles[key]), "utf8"));
}

function writeJson(key, data) {
  fs.writeFileSync(path.join(dataDir, jsonFiles[key]), `${JSON.stringify(data, null, 2)}\n`);
  exportCsvFiles();
}

function readAllData() {
  return {
    ownerProfile: readJson("ownerProfile"),
    users: readJson("users"),
    venues: readJson("venues"),
    bookings: readJson("bookings"),
    reviews: readJson("reviews"),
    chats: readJson("chats")
  };
}

function exportCsvFiles() {
  if (!fs.existsSync(dataDir)) return;

  const users = safeRead("users");
  const venues = safeRead("venues");
  const bookings = safeRead("bookings");
  const reviews = safeRead("reviews");
  const ownerProfile = safeReadObject("ownerProfile");

  writeCsv("ownerProfile.csv", [ownerProfile], ["displayName", "username", "email", "phone", "bio"]);
  writeCsv("users.csv", users, ["id", "email", "password", "role", "status", "createdAt", "reviewedAt"]);
  writeCsv("venues.csv", venues, ["id", "name", "city", "owner", "ownerEmail", "status", "registrationStatus", "price", "capacity", "createdAt", "reviewedAt"]);
  writeCsv("bookings.csv", bookings, ["id", "venueName", "name", "email", "phone", "eventType", "guests", "fromDate", "toDate", "status", "createdAt", "completedAt"]);
  writeCsv("reviews.csv", reviews, ["id", "venueId", "venueName", "ownerEmail", "clientEmail", "clientName", "rating", "description", "status", "createdAt"]);
}

function safeRead(key) {
  const filePath = path.join(dataDir, jsonFiles[key]);
  return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf8")) : [];
}

function safeReadObject(key) {
  const filePath = path.join(dataDir, jsonFiles[key]);
  return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf8")) : {};
}

function writeCsv(fileName, rows, columns) {
  const csv = [
    columns.join(","),
    ...rows.map(row => columns.map(column => csvCell(row[column])).join(","))
  ].join("\n");
  fs.writeFileSync(path.join(dataDir, fileName), `${csv}\n`);
}

function csvCell(value) {
  if (Array.isArray(value)) value = value.join(" | ");
  if (value === undefined || value === null) value = "";
  const text = String(value).replaceAll('"', '""');
  return `"${text}"`;
}

function sendJson(res, data, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data, null, 2));
}

function sendError(res, message, status = 400) {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 2_000_000) {
        reject(new Error("Request body is too large."));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON body."));
      }
    });
  });
}

function upsertById(rows, row) {
  const index = rows.findIndex(item => item.id === row.id);
  if (index >= 0) rows[index] = { ...rows[index], ...row };
  else rows.unshift(row);
  return rows;
}

async function handleApi(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/data") {
    sendJson(res, readAllData());
    return;
  }

  if (req.method === "PATCH" && pathname === "/api/owner-profile") {
    const body = await readBody(req);
    const current = readJson("ownerProfile");
    const ownerProfile = {
      ...current,
      ...body,
      updatedAt: new Date().toISOString()
    };
    writeJson("ownerProfile", ownerProfile);
    sendJson(res, { ownerProfile });
    return;
  }

  if (req.method === "POST" && pathname === "/api/users") {
    const body = await readBody(req);
    const users = readJson("users");
    const existing = users.find(user => user.email === body.email && user.role === body.role);
    const user = {
      id: existing?.id || body.id || `user-${Date.now()}`,
      email: body.email,
      password: body.password || existing?.password || "",
      role: body.role,
      status: body.status || (body.role === "owner" ? "pending" : "registered"),
      createdAt: existing?.createdAt || body.createdAt || new Date().toISOString()
    };
    writeJson("users", upsertById(users, user));
    sendJson(res, { user, users: readJson("users") });
    return;
  }

  if (req.method === "POST" && pathname === "/api/venues") {
    const body = await readBody(req);
    const venues = readJson("venues");
    const venue = {
      ...body,
      id: body.id || `venue-${Date.now()}`,
      status: "pending",
      registrationStatus: "pending",
      createdAt: body.createdAt || new Date().toISOString()
    };
    writeJson("venues", upsertById(venues, venue));
    sendJson(res, { venue, venues: readJson("venues") });
    return;
  }

  const venueStatusMatch = pathname.match(/^\/api\/venues\/([^/]+)\/status$/);
  if (req.method === "PATCH" && venueStatusMatch) {
    const body = await readBody(req);
    const venueId = decodeURIComponent(venueStatusMatch[1]);
    const venues = readJson("venues");
    const venue = venues.find(item => item.id === venueId);
    if (!venue) {
      sendError(res, "Venue not found.", 404);
      return;
    }
    venue.status = body.status;
    venue.registrationStatus = body.status === "approved" ? "registered" : body.status;
    venue.reviewedAt = new Date().toISOString();
    writeJson("venues", venues);

    const users = readJson("users");
    users
      .filter(user => user.email === venue.ownerEmail && user.role === "owner")
      .forEach(user => {
        user.status = venue.registrationStatus;
        user.reviewedAt = venue.reviewedAt;
      });
    writeJson("users", users);

    sendJson(res, { venue, venues: readJson("venues"), users: readJson("users") });
    return;
  }

  if (req.method === "POST" && pathname === "/api/bookings") {
    const body = await readBody(req);
    const bookings = readJson("bookings");
    const booking = {
      ...body,
      id: body.id || `booking-${Date.now()}`,
      status: body.status || "incomplete",
      createdAt: body.createdAt || new Date().toISOString()
    };
    writeJson("bookings", upsertById(bookings, booking));
    sendJson(res, { booking, bookings: readJson("bookings") });
    return;
  }

  const bookingStatusMatch = pathname.match(/^\/api\/bookings\/([^/]+)\/status$/);
  if (req.method === "PATCH" && bookingStatusMatch) {
    const body = await readBody(req);
    const bookingId = decodeURIComponent(bookingStatusMatch[1]);
    const bookings = readJson("bookings");
    const booking = bookings.find(item => item.id === bookingId);
    if (!booking) {
      sendError(res, "Booking not found.", 404);
      return;
    }
    booking.status = body.status;
    booking.completedAt = body.status === "completed" ? new Date().toISOString() : "";
    writeJson("bookings", bookings);
    sendJson(res, { booking, bookings: readJson("bookings") });
    return;
  }

  if (req.method === "POST" && pathname === "/api/reviews") {
    const body = await readBody(req);
    const reviews = readJson("reviews");
    const review = {
      ...body,
      id: body.id || `review-${Date.now()}`,
      status: "visible",
      createdAt: body.createdAt || new Date().toISOString()
    };
    writeJson("reviews", upsertById(reviews, review));
    sendJson(res, { review, reviews: readJson("reviews") });
    return;
  }

  const reviewMatch = pathname.match(/^\/api\/reviews\/([^/]+)$/);
  if (req.method === "DELETE" && reviewMatch) {
    const reviewId = decodeURIComponent(reviewMatch[1]);
    const reviews = readJson("reviews").filter(review => review.id !== reviewId);
    writeJson("reviews", reviews);
    sendJson(res, { reviews: readJson("reviews") });
    return;
  }

  const chatMessageMatch = pathname.match(/^\/api\/chats\/([^/]+)\/messages$/);
  if (req.method === "POST" && chatMessageMatch) {
    const body = await readBody(req);
    const chatId = decodeURIComponent(chatMessageMatch[1]);
    const chats = readJson("chats");
    const chat = chats.find(item => item.id === chatId);
    if (!chat) {
      sendError(res, "Chat not found.", 404);
      return;
    }
    chat.messages.push({ ...body, createdAt: body.createdAt || new Date().toISOString() });
    writeJson("chats", chats);
    sendJson(res, { chat, chats: readJson("chats") });
    return;
  }

  sendError(res, "API route not found.", 404);
}

function serveStatic(req, res, pathname) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(rootDir, requestedPath));

  if (!filePath.startsWith(rootDir)) {
    sendError(res, "Forbidden.", 403);
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    sendError(res, "File not found.", 404);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

ensureDataFiles();

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (pathname.startsWith("/api/")) {
      await handleApi(req, res, pathname);
      return;
    }
    serveStatic(req, res, pathname);
  } catch (error) {
    console.error(error);
    sendError(res, error.message || "Server error.", 500);
  }
});

function listen(port) {
  server.once("error", error => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }
    throw error;
  });
  server.listen(port, () => {
    console.log(`VenueHub prototype running at http://localhost:${port}`);
    console.log(`Data files are saved in ${dataDir}`);
  });
}

listen(Number(process.env.PORT || 4173));
