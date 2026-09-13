# 🎧 CS — Ticket System

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

A modern, error-free, pixel-perfect, and fully responsive **Customer Support Zone & Ticket Management System** built with **React 19**, **Vite**, **Tailwind CSS**, and **React-Toastify**.

---

## 📂 Project Structure

```text
customer-support-zone/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── vector1.png
│   │   └── vector2.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── TicketCard.jsx
│   │   ├── TaskStatusSection.jsx
│   │   ├── ResolvedListModal.jsx
│   │   ├── NewTicketModal.jsx
│   │   ├── FilterBar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── tickets.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🌟 Key Features

- **Header / Navigation**: Brand title `CS — Ticket System` with pink dot accent, navigation links (`Home`, `FAQ`, `Changelog`, `Blog`, `Download`, `Contact`), and a `+ New Ticket` action button.
- **Top Banner Cards (In-Progress & Resolved)**:
  - **In-Progress Card**: Purple/Violet gradient (`#9333ea` – `#7c3aed`) with geometric white wave mesh background (`vector1.png`) and live counter.
  - **Resolved Card**: Emerald/Teal gradient (`#10b981` – `#047857`) with geometric white wave mesh background (`vector2.png`) and live counter.
- **Customer Tickets Grid**: 2-column responsive grid displaying ticket ID, status badges (`🟢 Open`, `🟡 In-Progress`, `🟢 Resolved`), issue descriptions, priority tags (`HIGH PRIORITY`, `MEDIUM PRIORITY`, `LOW PRIORITY`), customer name, and date.
- **Task Status Sidebar**:
  - **Task Status**: Active task card with a full-width green **Complete** button.
  - **Resolved Task**: List of completed tasks in soft lavender/indigo pill containers.
- **Footer**: Full-width dark 5-column footer with brand summary, company links, services, info links, social channels, and 2025 copyright text.

---

## 🚀 Installation & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/customer-support-zone.git
cd customer-support-zone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Netlify Deployment Guide

### Option 1: Direct Drag & Drop (Easiest)
1. Run `npm run build` to generate the `dist` folder.
2. Open [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder into Netlify.

### Option 2: GitHub Repository
1. Push this repository to GitHub.
2. Connect your repo in Netlify Dashboard.
3. Set build configuration:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. The included `public/_redirects` file automatically prevents SPA 404 routing errors on page reloads.

---

## 📄 License

Distributed under the MIT License.
