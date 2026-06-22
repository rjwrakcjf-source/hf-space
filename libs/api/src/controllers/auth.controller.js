const jwt = require('jsonwebtoken');

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET environment variable is required in production');
  }
  return secret || 'dev-secret-do-not-use-in-production';
}

async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    // Registration logic
    res.status(201).json({ message: 'User registered' });
  } catch (err) { next(err); }
}

async function login(req, res, next) {
  try {
    const { email } = req.body;
    const token = jwt.sign({ email }, getJwtSecret(), { expiresIn: '7d' });
    res.json({ token });
  } catch (err) { next(err); }
}

async function logout(req, res, next) {
  try {
    res.json({ message: 'Logged out' });
  } catch (err) { next(err); }
}

async function me(req, res, next) {
  try {
    res.json({ user: req.user });
  } catch (err) { next(err); }
}

async function refresh(req, res, next) {
  try {
    res.json({ token: null });
  } catch (err) { next(err); }
}

module.exports = { register, login, logout, me, refresh };
