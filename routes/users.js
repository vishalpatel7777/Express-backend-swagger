//  routes/users.js
import express from "express";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: User CRUD API
 *
 * /api/get-user:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *
 * /api/create-user:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Smith
 *     responses:
 *       201:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 name:
 *                   type: string
 *                   example: Jane Dev
 *
 * /api/delete-user/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the user to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *
 * /api/update-user/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the user to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 name:
 *                   type: string
 *                   example: Jane Doe
 *       404:
 *         description: User not found
 */

const user = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

router.get("/api/get-user", (req, res) => {
  res.json(user);
});

router.post("/api/create-user", (req, res) => {
  const newUser = {
    id: user.length + 1,
    name: req.body.name,
  };
  user.push(newUser);
  res.status(201).json(newUser);
});

router.delete("/api/delete-user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = user.findIndex((u) => u.id === userId);
  if (index !== -1) {
    user.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.put("/api/update-user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = user.findIndex((u) => u.id === userId);
  if (index !== -1) {
    user[index].name = req.body.name;
    res.json(user[index]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

export default router;
