# Toy-Topia | Toy Shop React App

**Live Demo:** [Your Live URL Here](https://toy-topia-web-project.web.app)

A **responsive Toy Shop website** built with **React**, **Firebase Authentication**, and **Tailwind CSS + DaisyUI**.  
This project allows users to browse toys, manage their profile, contact support, and read fun toy-related blogs.

---

## 🔹 Purpose

The purpose of this project is to create a **kids-friendly toy shop website** with user authentication, interactive features, and responsive design.  
It helps kids and parents explore toys, contact the store, and read toy-related blogs.

---

## 🔹 Key Features

- **User Authentication**: Sign Up, Login, Logout via Firebase
- **Profile Management**: Update photo, name, and email instantly
- **Contact Form**: SweetAlert2 notifications for submissions
- **Blog & FAQ Section**: Accordion and blog page for kids-friendly content
- **Responsive Design**: Works smoothly on mobile, tablet, and desktop
- **Carousel/Banner**: Homepage banner with overlay text
- **Animations**: AOS (Animate On Scroll) for lively effects

---

# React Project with TailwindCSS, Firebase, and More

This project is built using **React 19** with **Vite** as the build tool.  
It integrates modern tools and libraries for styling, routing, animations, authentication, and user interaction.

---

## Tech Stack Overview

| Package               | Version  | Purpose / Description                                                                                              |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| **@tailwindcss/vite** | ^4.1.15  | Enables easy integration of TailwindCSS with Vite for fast and optimized styling in development.                   |
| **tailwindcss**       | ^4.1.15  | A utility-first CSS framework used for creating responsive, modern, and elegant UI designs quickly.                |
| **aos**               | ^2.3.4   | Animate On Scroll library — adds smooth, eye-catching scroll animations to elements.                               |
| **firebase**          | ^12.4.0  | Used for backend services like authentication, hosting, and real-time database integration.                        |
| **react**             | ^19.1.1  | The core library for building dynamic and component-based user interfaces.                                         |
| **react-dom**         | ^19.1.1  | Provides DOM-specific methods that help render React components in the browser.                                    |
| **react-icons**       | ^5.5.0   | Includes a huge collection of popular icons (Font Awesome, Material Icons, etc.) for easy use in React components. |
| **react-router**      | ^7.9.4   | Provides navigation and routing functionality inside the app.                                                      |
| **react-router-dom**  | ^7.9.4   | Used for handling routes in a web-based React project (built on top of `react-router`).                            |
| **react-toastify**    | ^11.0.5  | Displays stylish toast notifications for success, error, or info messages.                                         |
| **sweetalert2**       | ^11.26.3 | Provides beautiful alert and popup modals with customization options.                                              |
| **swiper**            | ^12.0.3  | A modern, touch-friendly slider and carousel library for React.                                                    |

---

## Why These Are Used

- **TailwindCSS + Vite** → For fast development and beautiful, responsive design.
- **AOS** → To make the website feel dynamic and interactive through scroll animations.
- **Firebase** → For secure user authentication, hosting, and real-time data management.
- **React Router DOM** → To navigate between pages without reloading the site.
- **React Toastify & SweetAlert2** → To provide instant feedback (like success/error messages) with professional styling.
- **Swiper** → To display featured items, banners, or testimonials in elegant sliders.
- **React Icons** → To add consistent, scalable icons across the UI.

---

## 📁 Folder Structure

```
Toy-Topia/
├── 📂 public/
├── 📂 src/
│ ├── 📂 auth/ # Authentication-related components (Login, Signup, etc.)
│ ├── 📂 components/ # Reusable UI components (Buttons, Cards, Modals, etc.)
│ ├── 📂 context/ # Global contexts (AuthContext, AppContext)
│ ├── 📂 firebase/ # Firebase configuration and initialization files
│ ├── 📂 layout/ # Layout components (Navbar, Footer, MainLayout)
│ ├── 📂 pages/ # Application pages (Home, Login, Signup, etc.)
│ ├── 📂 privateRoute/ # Components for protected/private routes
│ ├── 📂 routes/ # Routing configuration and route definitions
│ ├── 📂 shared/ # Shared UI elements (Header, Footer, Loader, etc.)
│ └── 📄 main.jsx # Application entry point
│ └── 📄 index.css # style
│
├── 📄 tailwind.config.js # TailwindCSS configuration file
├── 📄 package.json # Project dependencies and scripts
└── 📄 README.md # Project documentation



