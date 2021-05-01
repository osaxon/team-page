class TeamMember{
    constructor(params){
        this.name = params.name;
        this.id = params.id;
        this.email = params.email;
        this.role = params.role;
        //this.github = params.github;
    }

    getRole = function (){
        return this.role;
    }

    
}

class Manager extends TeamMember{
    constructor(params){
        super(params)
        this.office = params.office;
        this.role = "manager";
    }

    createCard = function(){
        return `
        <div class="col-sm-4 d-flex justify-content-center">   
          <div class="card mb-3" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="role">${this.role}</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-dark" id="name">${this.name}</li>
                <li class="list-group-item text-dark" id="id">${this.id}</li>
                <li class="list-group-item text-dark" id="office">${this.office}</li>
              </ul>
              <div class="card-body ">
                <a href="#" class="card-link text-white" id="email">${this.email}</a>
              </div>
          </div>
        </div>`
    }
}

class Engineer extends TeamMember{
    constructor(params){
        super(params)
        this.github = params.github;
        this.role = "engineer";
    }

    createCard = function(){
        return `
        <div class="col-sm-4 d-flex justify-content-center">   
          <div class="card mb-3" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="role">${this.role}</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-dark" id="name">${this.name}</li>
                <li class="list-group-item text-dark" id="id">${this.id}</li>
                <li class="list-group-item text-dark" id="github">${this.github}</li>
              </ul>
              <div class="card-body ">
                <a href="#" class="card-link text-white" id="email">${this.email}</a>
              </div>
          </div>
        </div>`
    }
}

class Intern extends TeamMember{
    constructor(params){
        super(params)
        this.school = params.school;
        this.role = "intern";
    }

    createCard(){
        return `
        <div class="col-sm-4 d-flex justify-content-center">   
          <div class="card mb-3" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="role">${this.role}</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-dark" id="name">${this.name}</li>
                <li class="list-group-item text-dark" id="id">${this.id}</li>
                <li class="list-group-item text-dark" id="school">${this.school}</li>
              </ul>
              <div class="card-body ">
                <a href="#" class="card-link text-white" id="email">${this.email}</a>
              </div>
          </div>
        </div>`
    }
}

module.exports = {
    manager: Manager,
    engineer: Engineer,
    intern: Intern,
}