const express = require('express');
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

// All users HTML
app.get('/api/users', (req, res) => {
    const html = `
    <h1>All Users</h1>
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
}); 

// Single user HTML
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send("<h2>User not found</h2>");
    }

    const html = `
    <h1>User Details</h1>
    <ul>
        <li>Name: ${user.first_name}</li>
        <li>Email: ${user.email}</li>
    </ul>
    `;

    res.send(html);
});

// POST
app.post('/api/users', (req, res) => {
    return res.json({ status: "pending" });
});

// PATCH
app.patch('/api/users/:id', (req, res) => {
    return res.json({ status: "pending" });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
    return res.json({ status: "pending" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});