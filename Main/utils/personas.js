class teamMember{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole(){
        return this.role;
    }
}

class Manager extends teamMember {
    constructor(name, id, email, office){
        super(name, id, email)
        this.office = office;
        this.role = "Manager";
        
    }
}

class Engineer extends teamMember {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
        this.role = "Engineer";
    }
}

const oli = new Manager("oli",5,"oli@gmail.com", "Manchester");
const luke = new Engineer("luke",6,"luke@gmail.com","lukesaxo");
console.log(oli.getRole())
console.log(luke.getRole());