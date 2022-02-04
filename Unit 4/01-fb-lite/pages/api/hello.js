function handler(req, res) {
  const { name } = req.query;
  const { a } = req.params;
  res.json({ query: name, params: a });
}
