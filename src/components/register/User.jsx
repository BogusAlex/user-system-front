export default class User{
    firstname = '';
    lastname = '';
    email = '';
    password = '';

    constructor(firstname, lastname, email, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
}
