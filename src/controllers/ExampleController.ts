import { Request, Response } from "express";
import { ExampleService } from "../services/ExampleService";

export class ExampleController {
  private exampleService: ExampleService;

  constructor(exampleService: ExampleService) {
    this.exampleService = exampleService;
  }

  async getData(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.exampleService.getData();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: "Error obteniendo los datos" });
    }
  }
}