const express = require("express");
const router = express.Router();
const controller = require("../app/controller/controller");

//read
// router.get("/", controller.list);

// // read one
// router.get("/:id", controller.read);

// //create
// router.post("/", controller.create);

// //?update

// router.put("/:id", controller.update);

// //delete?
// router.delete("/:id", controller.delete);

// router.route("/").get(todo.list).post(todo.create);
router.route("/").get(controller.list).post(controller.create);

router
  .route("/:id")
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete);
module.exports = router;
