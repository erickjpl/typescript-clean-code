export class ExampleService {
  constructor() {}

  async getData(): Promise<any> {
    // Aquí va la lógica para obtener los datos
    return { message: "Datos obtenidos correctamente" };
  }
}