const users = [
  {id: '0', name: 'Peter Parker', email: 'peter@marvel.com'},
  {id: '1', name: 'Bruce Wayne', email: 'bruce@dc.com'}
]

//Model temporário até a inclusão do MongoDB
export class User {
  static findAll(): Promise<any[]>{
    return Promise.resolve(users)
  }

  static findById(id: string): Promise<any>{
    return new Promise((resolve) => {
      const usersFiltered = users.filter(user => user.id === id)
      let user = undefined

      if(usersFiltered.length > 0)
        user = usersFiltered[0]

      resolve(user)
    })
  } 
}