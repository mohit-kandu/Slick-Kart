const notFound = (req, res) => res.status(404).send("Resource not found. Make sure tha the URL is correct.")

module.exports = notFound