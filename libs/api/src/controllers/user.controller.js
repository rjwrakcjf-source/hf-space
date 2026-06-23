async function list(req, res, next) {
  try { res.json({ items: [] }); } catch (err) { next(err); }
}
async function getById(req, res, next) {
  try { res.json({ item: null }); } catch (err) { next(err); }
}
async function create(req, res, next) {
  try { res.status(201).json({ item: req.body }); } catch (err) { next(err); }
}
async function update(req, res, next) {
  try { res.json({ item: req.body }); } catch (err) { next(err); }
}
async function remove(req, res, next) {
  try { res.json({ success: true }); } catch (err) { next(err); }
}
module.exports = { list, getById, create, update, remove };
