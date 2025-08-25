import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    // 1️⃣ Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2️⃣ Extract the token
    const token = authHeader.split(" ")[1];

    // 3️⃣ Verify token using JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ Attach decoded data (userId, role) to request
    req.user = decoded; 

    // 5️⃣ Move to the next middleware / controller
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};
