import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  // JWTs are commonly sent as:Bearer <token>
  // Authorization: Bearer eyJhbGciOi...

  // Reads HTTP Authorization header.
  const authHeader = req.headers.authorization;
  // authHeader = "Bearer eyJhbGciOi..."

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
    // Stops request immediately.
  }

  // eyJhbGciOi...
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    // { userId: 123 }

    req.userId = decoded.userId;

    next(); 
    // passes control to the next middleware/route.
    // Without next(), request hangs forever
  } catch (error) {
    return res.status(401).json({ message: "Not authorised, token failed" });
  }
};

export default protect;

/*
This middleware ensures:

✅ only logged-in users access protected routes
✅ expired tokens rejected
✅ fake tokens rejected
✅ user identity available everywhere

ts:

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}
  */





/*
req.userId
[req.userId]

Comes from authentication middleware.

Usually middleware:

reads JWT token
verifies token
extracts userId
attaches to request
*/