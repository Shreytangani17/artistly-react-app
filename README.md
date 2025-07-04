# 🎤 Artistly — Performing Artist Booking Platform

Artistly is a modern and immersive web platform designed to simplify the process of discovering and booking performing artists for events. Whether you're planning a corporate event, wedding, or live concert, Artistly connects you with talented **DJs, singers, dancers, and speakers** across categories and cities.

![Hero Preview](./public/images/preview.png)

---

## 🔥 Features

- 🎬 **Video Hero Homepage** – Engaging full-screen video background with scroll animations
- 🧑‍🎤 **Artist Directory** – Filter artists by category, city, and fee range
- 📝 **Artist Onboarding Form** – Multi-step form with validation to onboard new performers
- 🎛 **Manager Dashboard** – View all artist submissions with a stylish interactive table
- 📞 **Contact Page** – Beautiful animated contact form with smooth transitions
- 🌓 **Dark Aesthetic** – Gradient themes, vibrant colors, and responsive design
- 🎨 **Framer Motion Animations** – Smooth scroll-in animations and modal transitions
- 📱 **Responsive Design** – Works beautifully across mobile, tablet, and desktop

---

## 📁 Folder Structure

artistly/
├── public/
│ ├── images/
│ └── videos/
├── src/
│ ├── components/ # Navbar, Footer, UI Elements
│ ├── pages/ # Home, About, Contact, Artists, ManagerDashboard, etc.
│ ├── data/ # Mock JSON files (e.g., artists.json)
│ ├── styles/ # Tailwind / Custom CSS
│ └── main.jsx
├── index.html
└── tailwind.config.js

yaml
Copy
Edit

---

## 🚀 Installation & Development

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/artistly.git
cd artistly
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
The app will start at http://localhost:5173.

✨ Tech Stack
React + Vite – Lightning-fast frontend development

Tailwind CSS – Utility-first styling

Framer Motion – Animations and interactions

React Router – Client-side routing

React Hook Form + Yup – Form validation

Mock Data / API
The project uses local mock JSON files to simulate API responses. You can find these in the src/data/ folder and modify them as needed.
