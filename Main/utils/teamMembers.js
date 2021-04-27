class TeamMember{
    constructor(params){
        this.name = params.name;
        this.id = params.id;
        this.email = params.email;
        this.role = params.role;
        this.github = params.github;
        this.office = params.office;
    }

    getRole(){
        return this.role;
    }
}

module.exports = TeamMember