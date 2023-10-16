import fs from "fs";

class User {
    constructor(company, username, email, password, full_name, date_of_birth, phone_number) {
      this.company = company; 
      this.username = username;
      this.email = email;
      this.password = password;
      this.full_name = full_name;
      this.date_of_birth = date_of_birth;
      this.phone_number = phone_number;
    }
  
    save() {
    
      const userData = {
        company: this.company,
        username: this.username,
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        date_of_birth: this.date_of_birth,
        phone_number: this.phone_number,
      };
  
      
      let users = [];
      try {
        const usersData = fs.readFileSync('usuarios.json', 'utf-8');
        users = JSON.parse(usersData);
      } catch (error) {
      
      }
  
    
      users.push(userData);
  
    
      fs.writeFileSync('usuarios.json', JSON.stringify(users, null, 2));
  
      console.log('Usuário cadastrado com sucesso.');
    }
  
  
    update() {}
  
    delete() {}
  }
  
  export default User;
  