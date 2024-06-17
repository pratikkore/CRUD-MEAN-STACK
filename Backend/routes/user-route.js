const express = require("express");
const router = express.Router();
const {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("./../handler/userHandler");
// router.use(express.json());

router.post("/users", async (req, res) => {
  //user add opertion

  console.log(req.body);
  let user = await addUser(req.body);
  res.send(user);
});

router.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  let user = await getUser(req.params["id"]);
  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  const user = await updateUser(req.params.id, req.body);
  res.send(user);
});

router.delete("/users/:id", async (req, res) => {
  await deleteUser(req.params.id);
  res.send();
});
module.exports = router;
