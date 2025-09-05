// src/core/api.ts
export class BackendCore {
  private data: any = { users: [] }
  
  constructor(private storage: any) {}
  
  async getUsers() {
    return this.data.users || []
  }
  
  async createUser(userData: any) {
    const newUser = { 
      id: Date.now().toString(), 
      createdAt: new Date().toISOString(),
      ...userData 
    }
    this.data.users.push(newUser)
    return newUser
  }
}
