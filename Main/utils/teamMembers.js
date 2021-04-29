class TeamMember{
    constructor(params){
        this.name = params.name;
        this.id = params.id;
        this.email = params.email;
        this.role = params.role;
        //this.github = params.github;
    }

    getRole(){
        return this.role;
    }
}

class Manager extends TeamMember{
    constructor(params){
        super(params)
        this.office = params.office;
        this.role = "manager";
    }
}

class Engineer extends TeamMember{
    constructor(params){
        super(params)
        this.github = params.github;
        this.role = "engineer";
    }
}

module.exports = {
    manager: Manager,
    engineer: Engineer,

}