const students = [
  { id: 1, name: "Aarav" },
  { id: 2, name: "Diya" },
  { id: 3, name: "Kabir" },
];

export default function StudentPage() {
  return (
    <main>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </main>
  );
}
