import { Request, Response } from 'express';

export interface Controller<T = any> {
  run (req: Request<T>, res: Response): Promise<void>;
}
