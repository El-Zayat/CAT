import { RequestHandler } from "express";

const register: RequestHandler = (req, res, next) => {
    res.send("Success!");
};

export default { register };
