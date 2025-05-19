# TaskSync

**TaskSync** is a full-stack task management application featuring a Django REST API backend and a Next.js + TypeScript frontend.  
This project enables users to efficiently create, update, and manage tasks with a modern, responsive interface.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Getting Started](#getting-started)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
- [Environment Variables](#environment-variables)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

TaskSync consists of two parts:

- **Backend:** A Django REST API handling task data, authentication, and business logic.  
- **Frontend:** A Next.js app with TypeScript and Tailwind CSS that consumes the API and provides a clean, user-friendly interface.

---

## Tech Stack

| Layer    | Technology                          |
| -------- | --------------------------------- |
| Backend  | Python, Django, Django REST Framework |
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Database | SQLite (default), can switch to PostgreSQL or others |
| Version Control | Git & GitHub                 |

---

## Features

- User registration and authentication  
- CRUD operations for tasks (Create, Read, Update, Delete)  
- Responsive design for mobile and desktop  
- API integration for seamless data flow  
- Clear, maintainable codebase with TypeScript support  

---

## Getting Started

### Backend Setup

1. Clone the backend repository or navigate to your backend folder:

   ```bash
   git clone https://github.com/yourusername/tasksync-backend.git
   cd tasksync-backend
