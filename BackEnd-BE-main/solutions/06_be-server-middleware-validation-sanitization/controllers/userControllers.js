export function validateResponse(req, res) {
  res.send({ message: "This user looks valid!" });
}

export function sanitizeResponse(req, res) {
  res.send(req.body);
}
