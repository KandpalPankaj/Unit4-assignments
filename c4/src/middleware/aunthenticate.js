require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.key),
      (err, decoded) => {
        if (err) return reject(err);
        return resolve(decoded);
      };
  });
};

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).send({ message: "authentication failed" });
  if (!req.headers.authorization.startWith("Bearer"))
    return res.status(401).send({ message: "authentication failed" });

  const token = req.headers.authorization.trim().split(" ")[1];
  let decoded;

  try{
    decoded= await verifyToken(token);
  }
  catch(err){
    req.todoId=decoded.todo._id;
    return next();
  }

};


module.exports =authenticate;