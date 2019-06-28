class UserService{

  constructor(){

  }

  isAdmin(){
    return true
  }

  isSuperAdmin(){
    return true
  }

}

module.exports = new UserService();