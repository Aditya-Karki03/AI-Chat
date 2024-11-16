import { request, response, NextFunction } from "express";

class GlobalErrorHandler {
  public handleError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log(err);
  }
}

export default GlobalErrorHandler;
