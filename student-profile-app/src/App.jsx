import { useState } from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    course: "",
    email: ""
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudents([...students, student]);

    setStudent({
      name: "",
      roll: "",
      course: "",
      email: ""
    });
  };

  return (
    <div className="container">

      <h1>Student Profile Cards</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="roll"
          placeholder="Enter Roll Number"
          value={student.roll}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Student
        </button>

      </form>

      <div className="card-container">

        {students.map((s, index) => (
          <StudentCard
            key={index}
            name={s.name}
            roll={s.roll}
            course={s.course}
            email={s.email}
          />
        ))}

      </div>

    </div>
  );
}

export default App;