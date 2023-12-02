import { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const handleValidationError: RequestHandler = (req, res, next) => {
    let validation = validationResult(req);
    if (!validation.isEmpty()) {
        res.send({
            status: 400,
            msg: validation.array().map(e => e.msg),
        });
    } else next();
};
