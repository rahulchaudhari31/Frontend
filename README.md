# E2E HRC – Frontend

Official marketing website frontend for **E2E Human Resource Consultancy Ltd**, connecting talent with opportunity. Built with React, Vite, and Tailwind CSS.

🔗 Live contact: [humanresource-seven.vercel.app](mailto:info@e2ehrc.co.uk)

---

## ✨ Features

- Modern, responsive landing page with smooth Framer Motion animations
- Separate flows for **Employers** and **Employees**
- Workforce Solutions, About Us, and Become a Partner pages
- Blog listing with individual blog article routes
- "Get in Touch" modal with context-aware contact type (employer/employee)
- Client-side routing via React Router

## 🛠️ Tech Stack

| Category   | Technology |
|------------|------------|
| Framework  | React 19 |
| Build Tool | Vite |
| Styling    | Tailwind CSS |
| Animation  | Framer Motion |
| Routing    | React Router DOM v7 |
| Icons      | Lucide React, React Icons |
| Linting    | Oxlint |

## 📁 Project Structure

```
Frontend/
├── public/                # Static assets (logo, favicon, images)
├── src/
│   ├── assets/            # Images used across the app
│   ├── components/        # Reusable UI components (Navbar, Footer, Modal, etc.)
│   ├── context/            # React context (Modal, Contact type)
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Route-level pages (Home, About, Employer, Employee, Blogs, etc.)
│   ├── App.jsx             # App routes
│   └── main.jsx            # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/rahulchaudhari31/Frontend.git

# Move into the project directory
cd Frontend

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the code

```bash
npm run lint
```

## 🤖 Using OpenCode in VS Code

You can use [OpenCode](https://opencode.ai) — an open-source AI coding agent — directly inside VS Code's integrated terminal to help you work on this project.

**1. Install OpenCode** (one-time setup):

```bash
curl -fsSL https://opencode.ai/install | bash
```

**2. Open the integrated terminal in VS Code** (`` Ctrl+` `` on Windows/Linux, `` Cmd+` `` on Mac), navigate to the project folder, then run:

```bash
opencode
```

This launches OpenCode's TUI inside your terminal and automatically installs the VS Code extension so it can read your open files, selections, and project context. From here you can ask it to explain, refactor, or extend this codebase.

> Make sure you run `opencode` from **inside VS Code's own integrated terminal** (not an external terminal) — that's how it detects the editor.

## 📄 License

All Rights Reserved © 2026 E2E Human Resource Consultancy Ltd. 
