import fs from "fs";
import bcrypt from "bcryptjs";

class User {
  constructor(
    company,
    username,
    email,
    password,
    full_name,
    date_of_birth,
    phone_number
  ) {
    this.company = company;
    this.username = username;
    this.email = email;
    this.password = password;
    this.full_name = full_name;
    this.date_of_birth = date_of_birth;
    this.phone_number = phone_number;
  }

  static userExists(username, email) {
    const usersData = fs.readFileSync("usuarios.json", "utf-8");
    const users = JSON.parse(usersData);

    return users.some(
      (user) => user.username === username || user.email === email
    );
  }

  newUser() {
    if (User.userExists(this.username, this.email)) {
      throw new Error("Nome de usuário ou email já existe.");
    }

    function generateRandomNumber() {
      return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    }

    const cod = generateRandomNumber();
    const cod_company = generateRandomNumber();

    const salt = bcrypt.genSaltSync(10);

    const hashed_password = bcrypt.hashSync(this.password, salt);

    const permissions = "root";

    const role = "owner";

    const userData = {
      cod,
      cod_company,
      company: this.company,
      username: this.username,
      email: this.email,
      hashed_password,
      full_name: this.full_name,
      date_of_birth: this.date_of_birth,
      phone_number: this.phone_number,
      permissions,
      role,
    };
    let users = [];
    try {
      const usersData = fs.readFileSync("usuarios.json", "utf-8");
      users = JSON.parse(usersData);
    } catch (error) {
      console.error(error);
    }

    users.push(userData);

    fs.writeFileSync("usuarios.json", JSON.stringify(users, null, 2));

    return {
      cod: userData.cod,
      cod_company: userData.cod_company,
      company: userData.company,
      username: userData.username,
      email: userData.email,
      full_name: userData.full_name
    };
  }

  updateUser() {}

  deleteUser() {}
}

export default User;
