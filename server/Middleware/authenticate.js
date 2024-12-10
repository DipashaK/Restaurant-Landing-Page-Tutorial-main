const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Received token:', token); 
  
    if (!token) {
      return res.status(401).send({ error: 'Please authenticate. No token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      console.error('Authentication failed:', error.message);
      return res.status(401).send({ error: 'Authentication failed, invalid token or expired.' });
    }
};

module.exports = { authenticate };
