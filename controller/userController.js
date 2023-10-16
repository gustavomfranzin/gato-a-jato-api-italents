import User from "../models/userModels.js";

class UserController {
  async createUser(req, res) {
    try {
      const {
        company,
        username,
        email,
        password,
        full_name,
        date_of_birth,
        phone_number,
      } = req.body;
      const newUser = new User(
        company,
        username,
        email,
        password,
        full_name,
        date_of_birth,
        phone_number
      );
      newUser.save();

      res.json({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      res.status(500).json({ error: "Erro ao cadastrar o usuário"});
    }
  }
}

export default UserController;
