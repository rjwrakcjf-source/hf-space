const jwt = require('jsonwebtoken');

async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    // Registration logic
    res.status(201).json({ message: 'User registered' });
  } catch (err) { next(err); }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
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
