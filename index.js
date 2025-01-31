const express = require('express');

const app = express();

app.use(express.json());
const students = [
    { id: 1, name: "Chaves", age: 8, enroll: true },
    { id: 2, name: "Quico", age: 9, enroll: true },
    { id: 3, name: "Chiquinha", age: 8, enroll: true },
    { id: 4, name: "Nhonho", age: 7, enroll: true },
    { id: 5, name: "Popis", age: 8, enroll: true },
    { id: 6, name: "Godinez", age: 8, enroll: true },
    { id: 7, name: "Paty", age: 8, enroll: true },
    { id: 8, name: "Jaime", age: 9, enroll: true },
    { id: 9, name: "Maluco", age: 8, enroll: true },
    { id: 10, name: "Maria Antonieta", age: 8, enroll: true },
];

app.get("/", (req, res) => {
    res.send("Node.js API funcionando!");
});

app.get("/api/students", (req, res) => {
    res.json(students);
});

app.get("/api/students/:id", (req, res) => {
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Aluno não encontrado!");
    res.json(student);
});

app.post("/api/students", (req, res) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).send("Nome e idade são obrigatórios!");
    }
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: req.body.enroll === "true",
    };
    students.push(student);
    res.status(201).json(student);
});

app.put("/api/students/:id", (req, res) => {
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Aluno não encontrado");

    if (req.body.name) student.name = req.body.name;
    if (req.body.age !== undefined) student.age = parseInt(req.body.age);
    if (req.body.enroll !== undefined) student.enroll = req.body.enroll === "true";

    res.json(student);
});

app.delete("/api/students/:id", (req, res) => {
    const studentIndex = students.findIndex((c) => c.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).send("Aluno não encontrado");

    const removedStudent = students.splice(studentIndex, 1);
    res.json(removedStudent[0]);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Escutando na porta ${port}`));

