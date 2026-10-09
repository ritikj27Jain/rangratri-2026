/* ========================================================
   RANGRATRI 2026 — EASY EDIT AREA
   Everything the client may want to change is in this block.
   Edit text between "quotes". Keep commas and brackets.
   Missing details use PLACEHOLDERS ending in _HERE — they stay
   inactive (buttons are dimmed) until you replace them.
   ======================================================== */

// ======================================================
// RANGRATRI 2026 — EVENT CONFIGURATION
// EDIT YOUR EVENT DETAILS HERE
// ======================================================
const eventConfig = {
  name: "RangRatri",                 // Event name (shown big in the hero)
  year: "2026",
  tagline: "The Dandiya Experience", // Main tagline
  dates: "16–17 October 2026",       // Dates text
  time: "6:00 PM – 11:00 PM",        // Schedule timing. NOTE: poster says "6PM TO 12AM" — change here once the client confirms.
  posterTimeNote: "Poster mentions 6 PM to 12 AM — final closing time to be confirmed.", // set to "" to hide
  venue: "AR 7 Round, Sasaram",
  address: "Lalganj, Tetari, Bihar – 821115",
  startDate: "2026-10-16T18:00:00+05:30", // Countdown target (ISO format with +05:30 for India)
  bookingLink: "BOOKING_LINK_HERE",  // Online booking URL. While it says BOOKING_LINK_HERE, buttons scroll to the payment section.
  heroImage: "assets/images/hero/hero.jpg", // Optional background photo. If the file is missing, a CSS background is used.
  aboutImage: "assets/images/misc/poster.jpg",
  about: "RangRatri 2026 brings together the spirit of Navratri, the energy of Dandiya, music, food, culture and community for two unforgettable festive nights in Sasaram.",
  aboutChips: ["Live DJ", "Dandiya", "Food", "Best Jodi", "Best Dress-Up", "Best Dance"]
};

const contactInfo = {
  phone1: "9708052213",              // Shown + used for Call button
  phone2: "9341855121",
  whatsapp: "919708052213",          // WhatsApp number with country code, no + or spaces
  email: "EMAIL_HERE"                // Not provided yet
};

const paymentInfo = {
  upiId: "ak9708052213-3@oksbi",
  qrImage: "assets/images/misc/payment-qr.jpg", // Exact client QR. To replace, overwrite this file or change the path.
  note: "Scan the QR code to pay. Then send your payment screenshot, your name and your contact number to the event team. Your ticket confirmation is shared once the payment is verified.",
  steps: [
    ["Choose your ticket", "Pick a package and group size."],
    ["Scan & pay", "Scan the QR code and complete payment."],
    ["Send details", "Send screenshot + name + contact number."],
    ["Verification", "Wait for the team to verify payment."],
    ["Get confirmation", "Receive your ticket confirmation."]
  ]
};

const venueInfo = {
  name: "AR 7 Round, Sasaram",
  address: "Lalganj, Tetari, Bihar – 821115",
  mapsLink: "GOOGLE_MAPS_LINK_HERE"  // Paste the Google Maps share link here
};

const socialLinks = {
  instagram: "INSTAGRAM_URL_HERE",
  facebook: "FACEBOOK_URL_HERE",
  youtube: "YOUTUBE_URL_HERE"
};

// Ticket prices. To change a price edit "price". To add a package copy one block.
const ticketPackages = [
  { id: "entry", name: "Entry", tiers: [
    { who: "Solo", people: 1, price: 299, includes: ["Entry"] },
    { who: "Couple", people: 2, price: 499, includes: ["Entry"] },
    { who: "Family", people: 4, price: 799, includes: ["Entry"] } ] },
  { id: "starter", name: "Entry + Starter", tiers: [
    { who: "Solo", people: 1, price: 399, includes: ["Entry", "Water", "Chaat", "Noodles"] },
    { who: "Couple", people: 2, price: 699, includes: ["Entry", "Water", "Chaat", "Noodles"] },
    { who: "Family", people: 4, price: 1099, includes: ["Entry", "Water", "Chaat", "Noodles"] } ] },
  { id: "dinner", name: "Entry + Premium Dinner", tiers: [
    { who: "Solo", people: 1, price: 699, includes: ["Entry", "Premium Dinner"] },
    { who: "Couple", people: 2, price: 1099, includes: ["Entry", "Premium Dinner"] },
    { who: "Family", people: 4, price: 1599, includes: ["Entry", "Premium Dinner"] } ] }
];

// Schedule: [time, title, description]. Add / remove / reorder lines freely.
const eventSchedule = [
  { id: "day1", label: "Day 1", date: "16 October 2026", items: [
    ["6:00 – 6:30 PM", "Guest Entry & Registration", "Welcome, registration, wristbands/pass collection & photo moments."],
    ["6:30 – 6:45 PM", "Traditional Welcome & Diya Lighting", "Opening ceremony and Navratri welcome."],
    ["6:45 – 7:00 PM", "Event Opening", "Host introduction, event rules & contest announcements."],
    ["7:00 – 7:30 PM", "Garba Warm-Up Session", "Easy Garba/Dandiya steps for everyone."],
    ["7:30 – 8:15 PM", "Dandiya Round 1", "Full-energy traditional Dandiya."],
    ["8:15 – 8:45 PM", "Food & Refreshment Break", "Food stalls open + networking."],
    ["8:45 – 9:15 PM", "Best Dress-Up Contest", "Traditional Navratri attire showcase."],
    ["9:15 – 9:45 PM", "Best Jodi Contest", "Couple/friends/duo Dandiya challenge."],
    ["9:45 – 10:30 PM", "Live DJ Dandiya Night", "High-energy Bollywood & Garba/Dandiya mix."],
    ["10:30 – 10:50 PM", "Day 1 Winners & Special Recognition", ""],
    ["10:50 – 11:00 PM", "Grand Closing Beat", "Final group Dandiya & Day 2 announcement."] ] },
  { id: "day2", label: "Day 2", date: "17 October 2026", items: [
    ["6:00 – 6:30 PM", "Entry & Welcome", "Registration, music & photo zone."],
    ["6:30 – 6:45 PM", "Navratri Welcome", "Short traditional opening."],
    ["6:45 – 7:15 PM", "Garba & Dandiya Warm-Up", ""],
    ["7:15 – 8:00 PM", "Dandiya Round 1", "Open participation."],
    ["8:00 – 8:30 PM", "Food & Refreshment Break", ""],
    ["8:30 – 9:00 PM", "Best Dance Contest", "Individual/group performances."],
    ["9:00 – 9:20 PM", "Best Jodi", "Final Round."],
    ["9:20 – 9:40 PM", "Best Dress-Up", "Final Showcase."],
    ["9:40 – 10:20 PM", "Live DJ Dandiya", "Grand Party Round."],
    ["10:20 – 10:40 PM", "Grand Prize Distribution", "Best Jodi • Best Dress-Up • Best Dance"],
    ["10:40 – 10:55 PM", "Grand Finale Dandiya", "Everyone joins the dance floor."],
    ["10:55 – 11:00 PM", "Vote of Thanks & Official Closing", ""] ] }
];

// icon = key from ICONS below
const highlights = [
  { icon: "dandiya", title: "Dandiya", text: "Traditional Dandiya and Garba rounds, with warm-ups so everyone can join in." },
  { icon: "music", title: "Live DJ", text: "A Live DJ Dandiya Night on both days." },
  { icon: "food", title: "Food", text: "Food & refreshment breaks, with starter and premium dinner ticket options." },
  { icon: "heart", title: "Best Jodi", text: "A couple/friends/duo Dandiya challenge." },
  { icon: "dress", title: "Best Dress-Up", text: "A traditional Navratri attire showcase." },
  { icon: "trophy", title: "Best Dance", text: "Individual and group performances on Day 2." }
];

// Prizes are NOT announced yet — add a "prize" line here when confirmed.
const contestCategories = [
  { icon: "heart", title: "Best Jodi", criteria: ["Coordination", "Chemistry", "Energy", "Creativity"] },
  { icon: "dress", title: "Best Dress-Up", criteria: ["Traditional Gujarati/Navratri attire", "Presentation", "Styling"] },
  { icon: "trophy", title: "Best Dance", criteria: ["Performance", "Synchronization", "Creativity", "Audience engagement"] }
];

const eventZones = [
  { icon: "door", name: "Entrance" }, { icon: "pen", name: "Registration" }, { icon: "camera", name: "Photo Booth" },
  { icon: "food", name: "Food Court" }, { icon: "stage", name: "Main Stage" }, { icon: "dandiya", name: "Dandiya Dance Floor" },
  { icon: "trophy", name: "Contest / Judging Area" }
];
const eventFlow = ["Welcome", "Garba", "Dandiya", "Food", "Contests", "Live DJ", "Awards", "Grand Finale"];

// Sponsors — names/spellings are exactly as the client provided. Add one block to add a sponsor.
// logo: put the file in assets/images/sponsors/ ; website: "#" means no website yet.
const sponsors = [
  { name: "Deep Brothers", business: "Franchise of CERA Tiles", owner: "Kahaniya Kumar", location: "Lalganj",
    logo: "assets/images/sponsors/deep-brothers.jpg", website: "#", description: "Franchise of CERA Tiles, Lalganj." },
  { name: "Raj Jewellers", business: "Gold Jewellery", owner: "Hursh Raj", location: "",
    logo: "assets/images/sponsors/raj-jewellers.jpg", website: "#", description: "Gold jewellery." },
  { name: "Anya Beautiparlour", business: "Beauty Parlour", owner: "Anya kumari", location: "",
    logo: "assets/images/sponsors/anya-beautiparlour.jpg", website: "#", description: "Beauty parlour." },
  { name: "Kahna Aqua Aroplant", business: "Mineral Water", owner: "Kahaiya Kumar", location: "",
    logo: "assets/images/sponsors/kahna-aqua.jpg", website: "#", description: "Mineral water." },
  { name: "Naksha Expert", business: "Design Interior Materials", owner: "Neeraj kumar verma", location: "",
    logo: "assets/images/sponsors/neeraj.jpeg", website: "#", description: "Design Interior Materials" },
  { name: "Shagun", business: "The House of Bride & Groom", owner: "Harikesh Kumar Soni", location: "",
    logo: "assets/images/sponsors/shagun.jpeg", website: "#", description: "The house of bride and groom" },
  { name: "Samrat", business: "GYM", owner: "Samrat", location: "",
    logo: "assets/images/sponsors/samrat.jpeg", website: "#", description: "Start building your wealth today" }
];

// Presented-by branding (organisers, not sponsors)
const organisers = [
  { name: "Crown Café & Restaurant (CCR)", logo: "assets/images/organisers/ccr.jpg" },
  { name: "AR 7 Round", logo: "assets/images/organisers/ar7round.jpg" },
  { name: "PIC.X — Marketing · Skill · Design", logo: "assets/images/organisers/picx.jpg" }
];

const performerInfo = { name: "DJ details coming soon", photo: "assets/images/misc/dj.jpg", instagram: "", description: "The Live DJ Dandiya Night is confirmed on both days. Performer details will be announced soon." };

// Gallery — add photos (and short videos/GIFs). Put files in assets/images/gallery/.
// Photo: { src, alt }   Video: { type: "video", src, poster, alt }   GIF: just use a .gif as src.
// Keep photos under ~300 KB and videos short (use .mp4) so the site stays fast.
const galleryImages = [
  // { src: "assets/images/gallery/gallery-01.jpg", alt: "RangRatri event" },
  // { type: "video", src: "assets/images/gallery/clip-01.mp4", poster: "assets/images/gallery/clip-01.jpg", alt: "Dandiya night clip" },
];

const parkingInfo = { summary: "Parking information will be updated soon.", details: [] /* e.g. ["Two-wheeler: yes", "Fee: free"] */ };
const dressCode = { summary: "Traditional Navratri / festive attire is encouraged.", details: [] };

const faqItems = [
  ["When is RangRatri 2026?", "RangRatri 2026 will take place on 16 and 17 October 2026."],
  ["What time does the event start?", "The event schedule begins at 6:00 PM."],
  ["Where is the event happening?", "AR 7 Round, Sasaram, Lalganj, Tetari, Bihar – 821115."],
  ["What ticket options are available?", "Entry, Entry + Starter, and Entry + Premium Dinner are available with Solo, Couple and Family options."],
  ["How do I book my ticket?", "Choose your ticket, make the payment using the provided QR code, and send the payment screenshot along with your name and contact number. Your ticket confirmation will be shared after verification."],
  ["Is there a DJ performance?", "Yes. The schedule includes Live DJ Dandiya."],
  ["Are there contests?", "Yes. Best Jodi, Best Dress-Up and Best Dance contests are part of the event."],
  ["Is parking available?", "Parking information will be updated soon."],
  ["Is there a dress code?", "Traditional Navratri/festive attire is encouraged. Any official dress-code requirements will be updated if provided by the organizers."]
];

const navLinks = [["Home","#home"],["About","#about"],["Schedule","#schedule"],["Contests","#contests"],["Tickets","#tickets"],["Sponsors","#sponsors"],["Gallery","#gallery"],["Venue","#venue"],["FAQ","#faq"],["Contact","#contact"]];

/* ========================================================
   END OF EASY EDIT AREA — the code below normally needs no changes
   ======================================================== */

const $ = (s, r = document) => r.querySelector(s);
const isReal = v => v && !/_HERE$/.test(v) && v !== "#";
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const inr = n => "₹" + n.toLocaleString("en-IN");
const ICONS = {
  dandiya: '<path d="M5 19L14 10M10 20L19 11M13 7l4-4 4 4-4 4zM3 17l4 4"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  food: '<path d="M4 3v8a3 3 0 003 3v7M8 3v8M12 3v8M17 3c-2 2-3 5-3 8h3v10"/>',
  heart: '<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 10c0 5.500-8 11-8 11z"/>',
  dress: '<path d="M9 3l3 3 3-3 2 6-3 2 4 10H7l4-10-3-2z"/>',
  trophy: '<path d="M8 4h8v6a4 4 0 01-8 0zM8 6H4v1a4 4 0 004 4M16 6h4v1a4 4 0 01-4 4M12 14v4M8 21h8"/>',
  door: '<path d="M6 21V8a6 6 0 0112 0v13M3 21h18"/>',
  pen: '<path d="M4 20l1-4L17 4l3 3L8 19zM14 7l3 3"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.500"/>',
  stage: '<path d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r=".6"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>'
};
const icon = (k, c = "ico") => `<span class="${c}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ""}</svg></span>`;
const mount = (sel, html) => { $(sel).innerHTML = html; };

/* Broken images become a tidy placeholder instead of a broken icon */
function imgFallback(root = document) {
  root.querySelectorAll("img[data-fb]").forEach(img => {
    const swap = () => { const d = document.createElement("div"); d.className = "ph"; d.textContent = img.dataset.fb; img.replaceWith(d); };
    img.addEventListener("error", swap, { once: true });
    if (img.complete && img.naturalWidth === 0) swap();
  });
}
const waLink = txt => `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(txt)}`;
const setLink = (el, href, label) => { if (isReal(href)) { el.href = href; el.removeAttribute("aria-disabled"); } else { el.removeAttribute("href"); el.setAttribute("aria-disabled", "true"); if (label) el.title = label; } };

/* ---------- Static sections ---------- */
function renderStatic() {
  const c = eventConfig;
  $("#hName").textContent = c.name; $("#hYear").textContent = c.year; $("#hTag").textContent = c.tagline;
  mount("#heroMeta", [c.dates, c.time, c.venue].map(t => `<li>${esc(t)}</li>`).join(""));
  mount("#menu", navLinks.map(([t, h]) => `<a href="${h}">${t}</a>`).join(""));
  const hb = $("#heroBg"), probe = new Image();
  probe.onload = () => { hb.style.backgroundImage = `url(${c.heroImage})`; hb.classList.add("has-img"); }; probe.src = c.heroImage;
  const ai = $("#aboutImg"); ai.src = c.aboutImage; ai.dataset.fb = "RangRatri";
  $("#aboutText").textContent = c.about;
  mount("#aboutChips", c.aboutChips.map(x => `<span>${esc(x)}</span>`).join(""));
  $("#timeNote").textContent = c.posterTimeNote ? `${c.time} · ${c.posterTimeNote}` : c.time;
  mount("#highlights", highlights.map(h => `<article class="card reveal">${icon(h.icon)}<h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></article>`).join(""));
  mount("#contests-grid", contestCategories.map(h => `<article class="card reveal">${icon(h.icon)}<h3>${esc(h.title)}</h3><p>Judged on:</p><ul class="crit">${h.criteria.map(x => `<li>${esc(x)}</li>`).join("")}</ul>${h.prize ? `<p>${esc(h.prize)}</p>` : ""}</article>`).join(""));
  mount("#zones", eventZones.map((z, i) => `<li class="reveal"><span class="n">${i + 1}</span>${icon(z.icon)}<h3>${esc(z.name)}</h3></li>`).join(""));
  mount("#flow", eventFlow.map(x => `<li><span>${esc(x)}</span></li>`).join(""));
  mount("#steps", paymentInfo.steps.map(([a, b]) => `<li><div><b>${esc(a)}</b>${esc(b)}</div></li>`).join(""));
  $("#qrImg").src = paymentInfo.qrImage; $("#qrImg").dataset.fb = "QR"; $("#upiId").textContent = paymentInfo.upiId; $("#payNote").textContent = paymentInfo.note;
  mount("#sponsorGrid", sponsors.map(s => `<article class="card sp reveal"><div class="sp-logo"><img src="${esc(s.logo)}" alt="${esc(s.name)} logo" loading="lazy" data-fb="${esc(s.name.split(" ").map(w => w[0]).join("").slice(0, 3))}"></div>
    <h3>${esc(s.name)}</h3><p class="biz">${esc(s.business)}</p><p>${esc(s.description)}</p>
    <p class="own">Owner: ${esc(s.owner)}${s.location ? ` · ${esc(s.location)}` : ""}</p>${isReal(s.website) ? `<a class="btn btn-sm btn-ghost" href="${esc(s.website)}" target="_blank" rel="noopener">Visit Website</a>` : ""}</article>`).join(""));
  mount("#organisers", organisers.map(o => `<div class="org" title="${esc(o.name)}"><img src="${esc(o.logo)}" alt="${esc(o.name)}" loading="lazy" data-fb="${esc(o.name)}"></div>`).join(""));
  const p = performerInfo;
  mount("#djPhoto", `<img src="${esc(p.photo)}" alt="${esc(p.name)}" data-fb="DJ">`); $("#djName").textContent = p.name; $("#djDesc").textContent = p.description;
  mount("#djLinks", isReal(p.instagram) ? `<a class="btn btn-sm btn-ghost" href="${esc(p.instagram)}" target="_blank" rel="noopener">Instagram</a>` : "");
  const v = venueInfo;
  mount("#venueCard", `<p class="kicker">${esc(c.dates)}</p><h3>📍 ${esc(v.name)}</h3><dl><div><dt>Address</dt><dd>${esc(v.address)}</dd></div><div><dt>Dates</dt><dd>${esc(c.dates)}</dd></div><div><dt>Timings</dt><dd>${esc(c.time)}</dd></div></dl><a class="btn" id="mapBtn" target="_blank" rel="noopener">Get Directions</a><p class="fine" id="mapNote"></p>`);
  setLink($("#mapBtn"), v.mapsLink); if (!isReal(v.mapsLink)) $("#mapNote").textContent = "Google Maps link coming soon.";
  const info = (t, o) => `<article class="card"><h3>${t}</h3><p>${esc(o.summary)}</p>${o.details.length ? `<ul>${o.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}</article>`;
  mount("#infoCards", info("Parking Information", parkingInfo) + info("Dress Code", dressCode));
  mount("#faqList", faqItems.map(([q, a], i) => `<div class="faq"><h3><button type="button" aria-expanded="false" aria-controls="fa${i}" id="fq${i}">${esc(q)}</button></h3><div class="a" id="fa${i}" role="region" aria-labelledby="fq${i}"><div><p>${esc(a)}</p></div></div></div>`).join(""));
  $("#faqList").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; const open = b.getAttribute("aria-expanded") === "true"; b.setAttribute("aria-expanded", !open); b.closest(".faq").classList.toggle("open", !open); });
  const ct = contactInfo;
  mount("#contactBox", `<p class="phones"><a href="tel:+91${ct.phone1}">${ct.phone1}</a><a href="tel:+91${ct.phone2}">${ct.phone2}</a></p><p class="mail">${isReal(ct.email) ? `<a href="mailto:${esc(ct.email)}">${esc(ct.email)}</a>` : "Email: coming soon"}</p>`);
  $("#cCall").href = `tel:+91${ct.phone1}`; $("#cWa").href = waLink(`Hello! I'd like to know more about ${c.name} ${c.year}.`);
  const soc = Object.entries(socialLinks).map(([k, u]) => isReal(u) ? `<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${k}">${icon(k, "")}</a>` : `<span aria-label="${k} coming soon" title="Coming soon">${icon(k, "")}</span>`).join("");
  mount("#socialContact", soc); mount("#socialFooter", soc);
  $("#fName").textContent = `${c.name} ${c.year}`; $("#fTag").textContent = c.tagline; $("#fDate").textContent = c.dates; $("#fAddr").innerHTML = `${esc(c.venue)}<br>${esc(c.address)}`;
  mount("#fLinks", navLinks.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join(""));
  mount("#fPhones", `<a href="tel:+91${ct.phone1}">${ct.phone1}</a><br><a href="tel:+91${ct.phone2}">${ct.phone2}</a>`);
  const bl = $("#bookLink"); if (isReal(c.bookingLink)) setLink(bl, c.bookingLink); else bl.hidden = true;
  setLink($("#waSend"), waLink(`Hello! I have made the payment for ${c.name} ${c.year}. Screenshot attached.\nName: \nContact number: `));
}

/* ---------- Schedule tabs ---------- */
function renderSchedule(i = 0) {
  mount("#dayTabs", eventSchedule.map((d, n) => `<button class="tab" role="tab" aria-selected="${n === i}" data-i="${n}">${esc(d.label)}<small>${esc(d.date)}</small></button>`).join(""));
  mount("#timeline", eventSchedule[i].items.map(([t, h, d], n) => `<li class="tl" style="animation-delay:${n * 60}ms"><time>${esc(t)}</time><h3>${esc(h)}</h3>${d ? `<p>${esc(d)}</p>` : ""}</li>`).join(""));
}
$("#dayTabs").addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) renderSchedule(+b.dataset.i); });

/* ---------- Tickets ---------- */
let pkgIndex = 0;
function renderTickets() {
  mount("#pkgTabs", ticketPackages.map((p, n) => `<button class="tab" role="tab" aria-selected="${n === pkgIndex}" data-i="${n}">${esc(p.name)}</button>`).join(""));
  const p = ticketPackages[pkgIndex];
  mount("#ticketCards", p.tiers.map((t, n) => `<article class="card tk${t.who === "Couple" ? " pop" : ""}"><div class="who">${esc(t.who)}</div><div class="pp">${t.people} ${t.people > 1 ? "persons" : "person"}</div>
    <div class="price">${inr(t.price)}</div><ul>${t.includes.map(x => `<li>${esc(x)}</li>`).join("")}</ul><a href="#booking" class="btn" data-pick="${n}">Book Now</a></article>`).join(""));
}
$("#pkgTabs").addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) { pkgIndex = +b.dataset.i; renderTickets(); } });
$("#ticketCards").addEventListener("click", e => {
  const b = e.target.closest("[data-pick]"); if (!b) return;
  const p = ticketPackages[pkgIndex], t = p.tiers[+b.dataset.pick], label = `${p.name} — ${t.who} (${t.people}) — ${inr(t.price)}`;
  $("#chosen").textContent = "Your choice: " + label;
  setLink($("#waSend"), waLink(`Hello! I have paid for: ${label} (${eventConfig.name} ${eventConfig.year}). Screenshot attached.\nName: \nContact number: `));
  if (isReal(eventConfig.bookingLink)) { e.preventDefault(); window.open(eventConfig.bookingLink, "_blank", "noopener"); }
});
$("#copyUpi").addEventListener("click", async e => { try { await navigator.clipboard.writeText(paymentInfo.upiId); e.target.textContent = "Copied ✓"; } catch { e.target.textContent = paymentInfo.upiId; } setTimeout(() => e.target.textContent = "Copy UPI ID", 2500); });

/* ---------- Gallery + lightbox ---------- */
let lbIdx = 0;
function renderGallery() {
  if (!galleryImages.length) { mount("#galleryGrid", Array.from({ length: 6 }, () => `<div class="m-item soon"><div class="ph">Photos coming soon</div></div>`).join("")); return; }
  mount("#galleryGrid", galleryImages.map((g, i) => `<button class="m-item" data-i="${i}" aria-label="Open: ${esc(g.alt)}">${g.type === "video"
    ? `<img src="${esc(g.poster || "")}" alt="${esc(g.alt)}" loading="lazy"><span class="badge">▶ Video</span>` : `<img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy">`}</button>`).join(""));
}
function lbShow(i) {
  lbIdx = (i + galleryImages.length) % galleryImages.length; const g = galleryImages[lbIdx];
  mount("#lbStage", g.type === "video" ? `<video src="${esc(g.src)}" controls autoplay playsinline></video>` : `<img src="${esc(g.src)}" alt="${esc(g.alt)}">`);
}
function lbOpen(i) { $("#lb").hidden = false; document.body.style.overflow = "hidden"; lbShow(i); $("#lbClose").focus(); }
function lbClose() { $("#lb").hidden = true; document.body.style.overflow = ""; mount("#lbStage", ""); if (document.fullscreenElement) document.exitFullscreen(); }
$("#galleryGrid").addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) lbOpen(+b.dataset.i); });
$("#lbClose").onclick = lbClose; $("#lbPrev").onclick = () => lbShow(lbIdx - 1); $("#lbNext").onclick = () => lbShow(lbIdx + 1);
$("#lbFs").onclick = () => document.fullscreenElement ? document.exitFullscreen() : $("#lb").requestFullscreen?.();
$("#lb").addEventListener("click", e => { if (e.target.id === "lb" || e.target.id === "lbStage") lbClose(); });
document.addEventListener("keydown", e => {
  if ($("#lb").hidden) { if (e.key === "Escape") closeMenu(); return; }
  if (e.key === "Escape") lbClose(); if (e.key === "ArrowLeft") lbShow(lbIdx - 1); if (e.key === "ArrowRight") lbShow(lbIdx + 1);
});

/* ---------- Countdown ---------- */
function countdown() {
  const box = $("#countdown"), target = new Date(eventConfig.startDate).getTime();
  const parts = ["Days", "Hours", "Minutes", "Seconds"];
  mount("#countdown", parts.map(p => `<div class="cd"><b data-p="${p}">00</b><span>${p}</span></div>`).join(""));
  const tick = () => {
    let d = target - Date.now();
    if (d <= 0) { box.innerHTML = `<p class="cd-done">The celebration has begun!</p>`; return clearInterval(timer); }
    const v = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
    box.querySelectorAll("b").forEach((b, i) => { const s = String(v[i]).padStart(2, "0"); if (b.textContent !== s) { b.textContent = s; b.classList.add("tick"); setTimeout(() => b.classList.remove("tick"), 300); } });
  };
  const timer = setInterval(tick, 1000); tick();
}

/* ---------- Nav, scroll effects ---------- */
function closeMenu() { $("#menu").classList.remove("open"); $("#burger").setAttribute("aria-expanded", "false"); }
$("#burger").onclick = () => { const o = $("#menu").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); };
$("#menu").addEventListener("click", e => { if (e.target.tagName === "A") closeMenu(); });
document.addEventListener("click", e => { // any "Book" button: external link if set, otherwise scroll to payment section
  const b = e.target.closest("[data-book]"); if (b && isReal(eventConfig.bookingLink)) { e.preventDefault(); window.open(eventConfig.bookingLink, "_blank", "noopener"); }
});
const onScroll = () => {
  $("#nav").classList.toggle("scrolled", scrollY > 40); $("#toTop").classList.toggle("show", scrollY > 700);
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
$("#toTop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

function observers() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  const sticky = $("#stickyCta"), hideEls = [$("#booking"), $("#tickets")];
  const vis = new Set(), so = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? vis.add(e.target) : vis.delete(e.target)); sticky.classList.toggle("hide", vis.size > 0); });
  hideEls.forEach(el => so.observe(el));
  const links = [...document.querySelectorAll(".menu a")], map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const no = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { links.forEach(l => l.classList.remove("on")); map.get(e.target.id)?.classList.add("on"); } }), { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) no.observe(s); });
}

/* ---------- Mandala + gold dust particles (lightweight canvas) ---------- */
function mandala() {
  let s = ""; const g = (n, r, w) => { for (let i = 0; i < n; i++) s += `<ellipse cx="200" cy="${200 - r}" rx="${w}" ry="${r / 3.2}" transform="rotate(${i * 360 / n} 200 200)"/>`; };
  g(24, 190, 10); g(16, 140, 14); g(12, 95, 16); g(8, 55, 12);
  $("#heroMandala").innerHTML = `<svg viewBox="0 0 400 400" fill="none" stroke="#d4a84b" stroke-width="1.2" aria-hidden="true">${s}<circle cx="200" cy="200" r="196"/><circle cx="200" cy="200" r="12"/></svg>`;
}
function particles() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("#particles"), cx = cv.getContext("2d"); let W, H, P = [];
  const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; P = Array.from({ length: Math.min(45, Math.floor(W / 28)) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + .4, v: Math.random() * .35 + .1, a: Math.random() })); };
  size(); addEventListener("resize", size);
  (function f() {
    if (!document.hidden) { cx.clearRect(0, 0, W, H);
      P.forEach(p => { p.y -= p.v; p.x += Math.sin(p.y / 60) * .25; p.a += .02; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
        cx.globalAlpha = .35 + Math.sin(p.a) * .3; cx.fillStyle = "#f1d58a"; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fill(); }); }
    requestAnimationFrame(f);
  })();
}

/* ---------- Boot ---------- */
renderStatic(); renderSchedule(); renderTickets(); renderGallery(); countdown(); mandala(); particles();
imgFallback(); observers();
new MutationObserver(() => imgFallback()).observe($("#sponsorGrid"), { childList: true });
