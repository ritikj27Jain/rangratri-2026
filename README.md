# RangRatri 2026 — The Dandiya Experience (static website)

Plain HTML + CSS + JavaScript. No build step, no backend, no database.

```
rangratri-2026/
├── index.html
├── css/style.css
├── js/script.js        <- ALL editable content is at the top of this file
└── assets/images/
    ├── hero/           hero.jpg (optional background photo)
    ├── gallery/        event photos / videos / GIFs
    ├── sponsors/       sponsor logos
    ├── organisers/     CCR, AR 7 Round, PIC.X logos
    └── misc/           poster.jpg, payment-qr.jpg, dj.jpg
```

## Run locally
1. Install VS Code. 2. Open the `rangratri-2026` folder. 3. Install the **Live Server** extension.
4. Right-click `index.html` → **Open with Live Server**. (Double-clicking `index.html` also works.)

## Change event details
Open `js/script.js`. The first block, **EASY EDIT AREA**, contains `eventConfig`. Example:
```js
dates: "16–17 October 2026",
time: "6:00 PM – 11:00 PM",   // poster says 6PM–12AM: change here once confirmed
```
Also in that block: `contactInfo`, `paymentInfo`, `venueInfo`, `socialLinks`, `ticketPackages`, `eventSchedule`, `sponsors`, `galleryImages`, `faqItems`, `performerInfo`, `parkingInfo`, `dressCode`.

## Add a sponsor
Put the logo in `assets/images/sponsors/`, then add a block to `sponsors`:
```js
{ name: "New Sponsor", business: "Shop type", owner: "Owner name", location: "Lalganj",
  logo: "assets/images/sponsors/new-sponsor.jpg", website: "#", description: "One line about them." },
```
Use `website: "https://..."` to show a Visit Website button. No logo file = tidy initials placeholder.

## Add gallery photos / videos / GIFs
Put files in `assets/images/gallery/`, then edit `galleryImages`:
```js
{ src: "assets/images/gallery/gallery-01.jpg", alt: "Dandiya night" },
{ src: "assets/images/gallery/fun.gif", alt: "Dancing" },
{ type: "video", src: "assets/images/gallery/clip-01.mp4", poster: "assets/images/gallery/clip-01.jpg", alt: "Clip" },
```
Keep it fast: photos under ~300 KB (about 1600 px wide JPG), videos short `.mp4` (under ~10 MB), GIFs small. Images load lazily; videos only load when opened.

## Change a price
In `ticketPackages`, edit `price: 299` etc.

## Change contact numbers
`contactInfo.phone1`, `phone2`, and `whatsapp` (country code, no `+`, e.g. `"919708052213"`).

## Payment QR
The client's QR is `assets/images/misc/payment-qr.jpg` (an unmodified crop of the client's screenshot). To replace it, overwrite that file with the new image (same name) or change `paymentInfo.qrImage`. Update `paymentInfo.upiId` too. The site does NOT process payments.

## Social media links
```js
instagram: "https://instagram.com/your_page",
```
Icons stay dimmed until a real URL replaces `..._URL_HERE`.

## Google Maps link
Open the venue in Google Maps → Share → Copy link, then set `venueInfo.mapsLink: "https://maps.app.goo.gl/..."`.

## Online booking link (optional)
Set `eventConfig.bookingLink` to a URL. While it says `BOOKING_LINK_HERE`, all "Book" buttons scroll to the payment section.

## Deploy to Netlify (free)
1. Create an account at netlify.com.
2. Either drag-and-drop the whole `rangratri-2026` folder onto **Add new site → Deploy manually**, or push it to GitHub and **Import from Git** (no build command, publish directory `/`).
3. Click Deploy. Netlify gives you a free `something.netlify.app` URL (you can rename it in Site settings).
4. A custom domain is optional and can be added later under Domain management.
