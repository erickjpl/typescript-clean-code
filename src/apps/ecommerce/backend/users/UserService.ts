export class UserService {
  constructor() { }

  async list () {
    return { message: "Datos obtenidos correctamente" };
  };

  async get (id: string) {
    return { message: `Datos obtenidos correctamente id ${id}` };
  };

  async create (name: string, email: string) {
    return { message: `Datos obtenidos correctamente name: ${name} email: ${email}` };
  };

  async update (id: string, name: string, email: string) {
    return { message: `Datos obtenidos correctamente id ${id} name: ${name} email: ${email}` };
  };

  async delete (id: string) {
    return { message: `Datos obtenidos correctamente id ${id}` };
  };
}