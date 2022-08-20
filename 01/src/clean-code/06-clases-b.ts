(()=>{

  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date
    gender: Gender
    name: string
  }

  class Person {
    public birthDate: Date
    public gender: Gender
    public name: string

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthDate = birthDate
    }
  }

  interface UserProps {
    birthDate: Date
    email: string
    gender: Gender
    lastAccess: Date
    name: string
    role: string
  }

  class User extends Person {
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ birthDate,email,gender,name,role}: UserProps){
      super({name,gender,birthDate})
      this.email = email
      this.role = role
      this.lastAccess = new Date()
    }
  }

  interface UserSettingsProps {
    birthDate: Date
    email: string
    gender: Gender
    lastOpenFolder: string
    name: string
    role: string
    workDirectory: string
  }

  class UserSettings extends User {
    public lastOpenFolder: string
    public workDirectory: string

    constructor({birthDate,email,gender,lastOpenFolder,name,role,workDirectory}: UserSettingsProps){
      super({birthDate,email,gender,name,role,lastAccess: new Date()})
      this.lastOpenFolder = lastOpenFolder
      this.workDirectory = workDirectory
      this.lastOpenFolder = ""
      this.workDirectory = ""
    }

    }

    const userSettings = new UserSettings({
      birthDate: new Date('01/01/1990'),
      email: 'test@gmail.com',
      gender: 'M',
      lastOpenFolder: 'C:\\',
      name: 'Test',
      role: 'admin',
      workDirectory: 'C:\\'
    })

    console.log({userSettings})
  }  
)()