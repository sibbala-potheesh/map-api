const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const usersFilePath = path.join(__dirname, "users.json");

function getUsers() {
  const data = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
}

exports.login = (req, res) => {
  const { username, password } = req.body;
  let users = getUsers();

  let user = users.find((u) => u.username === username);

  if (!user) {
    // Insert new user if not found
    users.push({ username, password });
    saveUsers(users);
  } else if (user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};
