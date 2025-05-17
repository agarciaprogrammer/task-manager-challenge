# Full Stack Implementation Exercise – Task Manager App

## 1. Requirements / Intro

You need to implement a web application that allows users to manage their personal tasks. The app must support task creation, editing, categorization, and filtering. Additionally, users must be able to mark tasks as completed or pending.

The application must follow a full-stack architecture with **frontend and backend separated**. Persistence must be handled through a **relational database using an ORM** (e.g., Sequelize, TypeORM, Prisma, Hibernate, etc.). 

> ⚠️ In-memory storage, localStorage, or mocks are not allowed for persistence.

## 2. Functionality (Single Mandatory Phase)

The system must allow the user to:

- Create a task with a title, optional description, and optional category.
- Edit an existing task.
- Delete a task.
- Mark tasks as completed or revert to pending.
- View lists of tasks filtered by:
  - Status (completed / pending)
  - Category (e.g., “Work”, “Personal”, etc.)
- Assign multiple tasks to a specific category.
- View task count by status and/or category (summary panel or counters).
- Sort tasks by creation date or title (asc/desc).

The app should be usable in a responsive layout (mobile-friendly is a plus).

## 3. Deliverables

To pass this exercise, in addition to the implementation, you must:

- Upload the code to a private GitHub repository, using proper Git commit practices.
- Include **frontend** and **backend** apps in their own folders: `frontend/` and `backend/`.
- Include a **bash/zsh script** (`run.sh`) that sets up the entire app on Linux/macOS using a single command. It should:
  - Install dependencies
  - Set up the database
  - Apply DB schema (migrations or auto-sync)
  - Start both frontend and backend apps
- Include a `README.md` with:
  - Setup instructions
  - All required tools and versions (e.g., Node.js 18.17, npm 9.6, etc.)
  - Example `.env` file (or mention required environment variables)
  - Any additional instructions to run or test the app
  - (Optional) URL to a live deployed version (Heroku, Vercel, Netlify, etc.)

## 4. Technologies

You are free to choose any technology stack provided that:

- The **frontend** is a **Single Page Application (SPA)** implemented using a modern UI framework (e.g., React, Vue, Angular).
- The **backend** exposes a **REST API** and is structured in layers:
  - **Controllers**
  - **Services**
  - **Repositories/DAOs**
- The app uses a **relational database** with an ORM library.
- The frontend and backend are two independent apps with separate dependencies and configuration.

> ❌ Server-side templating (e.g., EJS, Handlebars, Blade, JSP, etc.) is not allowed.

## 5. Bonus (Optional for Extra Points)

- Live deployed version with public URL.
- Unit tests (frontend and/or backend).
- Authentication layer (login form, default user).
- Drag-and-drop sorting or interaction.
- Reusable and modular component structure.
- Advanced filtering (e.g., by text content or multiple categories).
- Pagination for large task lists.
- TypeScript (on frontend or backend).

## 6. Evaluation Criteria

- ✅ Correctness and completeness of required features.
- 🧱 Proper project structure and layering.
- 💅 Code quality and readability.
- 🧪 Functionality and user experience.
- 🧰 Proper use of tools and modern development practices.
- 📦 Setup automation (run script, environment variables, clear README).
- 🔍 Bonus features (if included).

---

Good luck, and enjoy building the app!
