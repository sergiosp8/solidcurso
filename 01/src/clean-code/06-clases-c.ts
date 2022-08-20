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
    email: string  
    role: string
  }

  class User{
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ email,role}: UserProps){
      this.email = email
      this.role = role
      this.lastAccess = new Date()
    }
  }

  interface SettingsProps {   
    lastOpenFolder: string
    workDirectory: string
  }

  class Settings {
    public lastOpenFolder: string
    public workDirectory: string

    constructor({lastOpenFolder,workDirectory}: SettingsProps){
      this.lastOpenFolder = lastOpenFolder
      this.workDirectory = workDirectory
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

  class UserSettings {
    public person : Person
    public settings : Settings
    public user : User

    constructor({
      birthDate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workDirectory
    } : UserSettingsProps){
      this.person = new Person({birthDate,gender,name})
      this.settings = new Settings({lastOpenFolder,workDirectory})
      this.user = new User({email,role})
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date('1980-01-01'),
    email: 'test@gmail.com',
    gender: 'M',
    lastOpenFolder: 'home/zerch',
    name: 'Zerch',
    role: 'admin',
    workDirectory: 'home/zerch/work'
  })

  console.log({userSettings})
  
  }  
)()