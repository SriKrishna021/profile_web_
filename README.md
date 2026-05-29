# 🧑‍💻 Personal Portfolio — Full-Stack

> A production-ready personal portfolio built with **React.js**, **Node.js/Express**, and **PostgreSQL** — featuring a dark editorial design, live project showcase, animated skill bars, and a fully wired contact form.

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-336791?style=flat-square&logo=postgresql)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## ✨ Features

- **Hero Section** — Animated intro with stats and tech stack chips
- **Skills** — Animated progress bars triggered on scroll (IntersectionObserver)
- **Projects** — Grid fetched live from PostgreSQL via REST API, with detail modals
- **Experience** — Visual timeline of work history
- **Contact Form** — Validates, saves to DB, and sends email via Nodemailer
- **Responsive** — Works on desktop, tablet, and mobile
- **Fallback Data** — Frontend renders even when backend is offline

---

## 🗂 Project Structure

```
portfolio/
├── frontend/               # React.js app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── hooks/
│   │   │   └── useProjects.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── backend/                # Express.js API
│   ├── config/
│   │   ├── db.js           # PostgreSQL pool
│   │   └── schema.sql      # DB schema + seed data
│   ├── routes/
│   │   ├── projects.js     # GET/POST/DELETE /api/projects
│   │   └── contact.js      # POST /api/contact
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── package.json            # Root scripts (concurrently)
├── Procfile                # Heroku deployment
├── vercel.json             # Vercel deployment
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Set up the database

Make sure PostgreSQL is running, then:

```bash
createdb portfolio_db
psql -U postgres -d portfolio_db -f backend/config/schema.sql
```

> This creates the `projects` and `messages` tables and seeds 6 sample projects.

### 3. Configure environment variables

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your DB credentials and Gmail App Password

# Frontend
cp frontend/.env.example frontend/.env
# Edit frontend/.env — set REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Install dependencies

```bash
npm run install:all
```

### 5. Run in development

```bash
npm run dev
```

- Frontend → [http://localhost:3000](http://localhost:3000)
- Backend API → [http://localhost:5000/api](http://localhost:5000/api)

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/health` | Health check |
| `GET`  | `/api/projects` | Get all projects |
| `GET`  | `/api/projects/:id` | Get single project |
| `POST` | `/api/projects` | Add a new project |
| `DELETE` | `/api/projects/:id` | Delete a project |
| `POST` | `/api/contact` | Submit contact form |
| `GET`  | `/api/contact` | View all messages (admin) |

---

## ☁️ Deployment

### Frontend → Vercel

```bash
cd frontend
npm run build
# Push to GitHub, import repo in vercel.com
# Set env var: REACT_APP_API_URL=https://your-backend.herokuapp.com/api
```

### Backend → Heroku

```bash
heroku create your-portfolio-api
heroku addons:create heroku-postgresql:mini
heroku config:set EMAIL_USER=you@gmail.com EMAIL_PASS=xxx EMAIL_TO=you@gmail.com CLIENT_URL=https://your-frontend.vercel.app
git subtree push --prefix backend heroku main
```

After deploying, run the schema:
```bash
heroku pg:psql < backend/config/schema.sql
```

### Alternative: Railway (Backend + DB together)

1. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
2. Add a PostgreSQL plugin
3. Set env vars in Railway dashboard
4. Railway auto-detects the `Procfile`

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, CSS-in-JS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Email | Nodemailer (Gmail) |
| Deployment (FE) | Vercel / Netlify |
| Deployment (BE) | Heroku / Railway |
| Dev Tools | Nodemon, Concurrently |

---

## 📧 Contact Form Setup (Gmail)

1. Enable 2FA on your Google account
2. Go to **Google Account → Security → App Passwords**
3. Generate a password for "Mail"
4. Use that password as `EMAIL_PASS` in `.env`

---

## 📄 License

MIT © [Aryan Kumar](https://github.com/yourusername)

---

## 🙏 Acknowledgements

- [Google Fonts](https://fonts.google.com) — Playfair Display, DM Mono, Lato
- [Express.js](https://expressjs.com)
- [node-postgres](https://node-postgres.com)

---

> **Tip:** Replace all instances of `Aryan Kumar`, `yourusername`, and `aryan@example.com` with your real details before deploying!
