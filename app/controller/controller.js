"use strict";
const Library = require("../models/model");

module.exports = {
  list: async (req, res) => {
    const data = await Library.findAll();
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  create: async (req, res) => {
    const receivedData = req.body;
    const data = await Library.create(req.body);

    res.status(201).send({
      error: false,
      result: data.dataValues,
    });
  },
  read: async (req, res) => {
    //   const data = await Library.findByPk(req.params.id);
    const data = await Library.findOne({ where: { id: req.params.id } });
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await Library.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(202).send({
      error: false,
      message: "updated",
      body: req.body,
      result: data,
      new: await Library.findByPk(req.params.id),
    });
  },
  delete: async (req, res) => {
    const data = await Library.destroy({ where: { id: req.params.id } });

    if (data > 0) {
      res.status(204).send({
        error: false,
        message: "deleted",
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not Found.");
    }
  },
};
