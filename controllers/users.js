const { usersTable, post } = require("../models");

exports.CreateUser = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;

    const user = await usersTable.create({
      name,
      age,
      email,
      password,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

exports.GetUsers = async (req, res) => {
  try {
    const users = await usersTable.findAll({
      include: [
        {
          model: post,
        },
      ]
    });

    return res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usersTable.findOne({ where: { id: id } });

    if(!user) {
      return res.status(404).json({
        message: "User not found user with this " + id,
      });
    }


    return res.status(200).json({
      message: "Users fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usersTable.destroy({ where: { id: id } });

    if(!user) {
      return res.status(404).json({
        message: "User not found user with this " + id,
      });
    }


    return res.status(200).json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};
