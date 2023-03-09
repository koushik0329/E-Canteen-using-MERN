import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, 'koushik', {
    expiresIn: "30d",
  });
};

export default generateToken;
