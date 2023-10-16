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

      if (!company || !username || !email || !password || !full_name) {
        return res
          .status(400)
          .json({ error: "Campos obrigatórios não preenchidos." });
      }

      const newUser = new User(
        company,
        username,
        email,
        password,
        full_name,
        date_of_birth,
        phone_number
      );
      const createdUser = newUser.newUser();

      res.json({
        message: "Usuário cadastrado com sucesso",
        usuário: createdUser,
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao cadastrar o usuário: " + error.message });
    }
  }
}

export default UserController;
