
# 📚 Student Management REST API

A simple **Express.js REST API** using **Sequelize ORM** with **SQLite** to manage student records.  
It supports **CRUD operations** with **input validation** and **error handling**.

---

## ✅ Features
- Built with **Express.js** & **Sequelize ORM**
- Uses **SQLite** for storage
- CRUD API for managing students:
  - `id` (Integer, Auto-increment)
  - `name` (String)
  - `email` (String, Unique, Valid email)
  - `program` (String)
- **Validation** using `express-validator`
- **Error Handling** for invalid input & missing records

---

## ✅ Endpoints

| Method | Endpoint          | Description                  |
|--------|-------------------|-----------------------------|
| GET    | `/students`       | Retrieve all students       |
| GET    | `/students/:id`   | Retrieve student by ID      |
| POST   | `/students`       | Add new student             |
| PUT    | `/students/:id`   | Update student details      |
| DELETE | `/students/:id`   | Delete student record       |

---

## ✅ Prerequisites
- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js)

---

## ✅ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd express-sequelize-sqlite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node app.js
   ```
   Server runs at: **http://localhost:3000**

4. **Database**
   - SQLite database file will be created automatically: `database.sqlite`

---

## ✅ Example API Requests

### ➤ Create Student
```bash
curl -X POST http://localhost:3000/students \-H "Content-Type: application/json" \-d '{"name":"John Doe","email":"john@example.com","program":"Computer Science"}'
```

### ➤ Get All Students
```bash
curl http://localhost:3000/students
```

### ➤ Get Student by ID
```bash
curl http://localhost:3000/students/1
```

### ➤ Update Student
```bash
curl -X PUT http://localhost:3000/students/1 \-H "Content-Type: application/json" \-d '{"program":"Data Science"}'
```

### ➤ Delete Student
```bash
curl -X DELETE http://localhost:3000/students/1
```

---

## ✅ Error Handling
- **404 Not Found**: When student does not exist
- **400 Bad Request**: When input data is invalid
- **500 Internal Server Error**: For unexpected issues

---

## ✅ Technologies Used
- **Express.js** – Web framework
- **Sequelize** – ORM
- **SQLite** – Database
- **express-validator** – Input validation
- **Body-Parser** – Parse JSON requests

---

### ✅ Project Structure
```
express-sequelize-sqlite/
│
├── app.js                # Main app entry
├── models/
│   ├── index.js          # Sequelize instance
│   └── student.js        # Student model
├── routes/
│   └── studentRoutes.js  # API routes
└── package.json
```

---

🚀 **Ready to go!** You can now start the server and test the API with Postman or curl.
