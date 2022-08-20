(()=>{

  type Gender = "M" | "F";
  class Person {
    // public name: string
    // public gender: Gender
    // public birthDate: Date

    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {    
    public lastAccess: Date
    constructor(
      public email: string,
      public role : string,
      name : string,
      gender : Gender,
      birthDate : Date     
      ){
         super(name,gender,birthDate)
         this.lastAccess = new Date() 
      }

      checkCredentials(){
        return true
      }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      name : string,
      emial : string,
      role: string,
      gender: Gender,
      birthDate: Date
    ){
      super(emial,role,name,gender,birthDate)
    }
  }

  const userSettings = new UserSettings('/home/user','/home/user/Documents', 'Juan', 'test@gmail.com', 'admin', 'M', new Date('1985-10-21'))
  console.log({userSettings, areCredentialValid: userSettings.checkCredentials()})



})()