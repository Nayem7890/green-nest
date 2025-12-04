# 🌿 GreenNest

A modern, responsive web application for browsing and discovering indoor plants. Built with React and Firebase, featuring user authentication, plant catalog browsing, and a beautiful dark/light theme toggle.

## 📸 Visuals

<!-- Add a screenshot of your application here -->
![GreenNest Screenshot](./screenshot.png)

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 4.1.16 + DaisyUI 5.3.9
- **Routing:** React Router 7.9.4
- **Authentication:** Firebase Authentication 12.4.0
- **UI Components:** DaisyUI
- **Icons:** React Icons 5.5.0
- **Notifications:** React Hot Toast 2.6.0
- **Carousel/Slider:** Swiper 12.0.3
- **Language:** JavaScript (ES6+)

## ✨ Key Features

- **User Authentication**
  - Email/Password authentication
  - Google Sign-In integration
  - Password reset functionality
  - Protected routes for authenticated users

- **Plant Catalog**
  - Browse comprehensive plant collection
  - Advanced filtering (category, care level)
  - Search functionality
  - Sorting options (name, price, rating)
  - Detailed plant information pages
  - Stock availability indicators

- **User Profile**
  - View and update profile information
  - Display name and photo management
  - Account information display

- **Theme Toggle**
  - Dark/Light mode support
  - Theme preference persistence
  - Smooth theme transitions

- **Responsive Design**
  - Mobile-first approach
  - Fully responsive across all devices
  - Modern UI with glassmorphism effects

- **Home Page Features**
  - Hero carousel with plant showcases
  - Top-rated plants section
  - Plant care tips
  - Expert profiles section
  - Plant of the week feature

## 📦 Dependencies

### Production Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.16",
  "daisyui": "^5.3.9",
  "firebase": "^12.4.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.4",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.16"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.36.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "vite": "^7.1.7"
}
```

## 🚀 Local Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Firebase project setup

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd green-nest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google)
   - Copy your Firebase configuration
   - Update `src/firebase/firebase.config.js` with your Firebase credentials:
     ```javascript
     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     };
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔗 Links

- **Live Demo:** [https://stellar-cupcake-499dcc.netlify.app](https://stellar-cupcake-499dcc.netlify.app)
- **Repository:** [GitHub Repository URL]

## 📝 Additional Notes

- The application uses Firebase for authentication and user management
- Plant data is stored in `public/plants.json`
- Theme preference is saved in localStorage
- Protected routes require user authentication

---

Made with ❤️ using React and Firebase
