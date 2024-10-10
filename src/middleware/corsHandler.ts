import { Request, Response, NextFunction } from "express";

export function corsHandler(req: Request, res: Response, next: NextFunction): void {
  res.header("Access-Control-Allow-Origin", req.header("origin") || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.status(200).json({}); 
  } else {
    next(); 
  }
}
