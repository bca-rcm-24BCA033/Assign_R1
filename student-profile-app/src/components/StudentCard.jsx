import "./StudentCard.css";

function StudentCard({ name, roll, course, email }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>Roll No:</strong> {roll}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}

export default StudentCard;