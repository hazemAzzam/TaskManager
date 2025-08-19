# 📌 Project Specification

## 1. 🔐 Authentication & Authorization

* **JWT-based Authentication**

  * Issue **Access** & **Refresh Tokens**.
  * Refresh tokens used for silent re-authentication.
* **Protected Routes**

  * Only authenticated users can access:

    * Dashboard
    * Teams
    * Task Management
* **Role & Permissions**

  * Standard users can only access their own account & assigned tasks.
  * Admins/Managers can view and manage team-wide data.

---

## 2. ✅ Task Management

* **CRUD Operations**

  * Create, Read, Update, Delete tasks.
* **Task Attributes**

  * `title`, `description`, `status`, `priority`, `dueDate`, `assignee`.
* **Filtering & Search**

  * Filter tasks by:

    * Status (`pending`, `in_progress`, `completed`).
    * Priority (`low`, `medium`, `high`).
    * Due date range.
* **Pagination**

  * Server-side pagination for scalable performance.
* **Task Progress Tracking**

  * Visual indicators of task completion percentage.

---

## 3. 👥 Teams & Users

* **Team Features**

  * Each user belongs to a team.
  * Users can see **team-level progress** (aggregate task stats).
* **Object-Level Permissions**

  * Users can **only edit their own profile/account**.
  * Users can **only manage their assigned tasks**.
* **Profile Management**

  * Profile image upload.
  * Editable profile fields (name, email, etc.).
* **Team Insights**

  * Display team task completion & workload distribution.

---

## 4. 📊 Analytics & Reporting

* **Dashboard Analytics**

  * Overview of tasks:

    * Pending vs Completed vs In Progress.
    * Breakdown by priority.
* **Team Analytics**

  * Task completion rate per team.
  * Individual contribution insights.
* **Visualizations**

  * Progress charts (pie, bar, line).
  * Filterable by team, user, or timeframe.

---

## 5. 🖥️ Frontend UX/UI

* **Modern Responsive Design**

  * Built with React + Tailwind.
  * Mobile & desktop friendly.
* **Protected Navigation**

  * Login redirects to Dashboard.
  * Unauthorized users redirected to Login page.
* **Optimized Workflow**

  * Simple, intuitive task creation & assignment.
  * Clear status indicators and progress tracking.

---

## 6. ⚙️ Technical Stack

* **Backend**: Django + DRF
* **Authentication**: JWT (Access + Refresh)
* **Frontend**: React (Zustand for state, React Query for API)
* **Database**: PostgreSQL (or MySQL)
---

✨ With this structure:

* Each **model/feature** is clearly defined.
* Stakeholders (devs, PMs, even clients) can understand the scope.
* It’s easy to expand later (e.g., adding notifications, comments, or Kanban view).

---

<img width="1920" height="945" alt="ScreenShot Tool -20250819163658" src="https://github.com/user-attachments/assets/2e6942b9-a06d-4c8d-9928-3170fa223eeb" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163712" src="https://github.com/user-attachments/assets/4a282e36-e8c9-4c53-b67e-8a50d57822f3" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163559" src="https://github.com/user-attachments/assets/b884bf96-e3f1-40e0-9cb0-c769a1ba6ab6" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163517" src="https://github.com/user-attachments/assets/c7e909f3-d2ff-44a7-8b4f-f6a0c52aa694" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163823" src="https://github.com/user-attachments/assets/2b928fbf-c578-43bf-9c8f-77f259750b56" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163613" src="https://github.com/user-attachments/assets/ea5cce17-f2ab-4fff-898f-62f214c65339" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163910" src="https://github.com/user-attachments/assets/c2a81e73-d0cf-4d60-9530-64a06525f7db" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163922" src="https://github.com/user-attachments/assets/9bbb4817-62b9-4495-84f9-d2d6ba41d562" />

<img width="1920" height="945" alt="ScreenShot Tool -20250819163621" src="https://github.com/user-attachments/assets/e505c7fb-fabd-482f-81f5-5d5bc9fba47a" />
