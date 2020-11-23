module.exports.handleResponse = (res, response, error) => {
    const status = error ? error.status : 200;
    res.status(status).json({ error: error && error.errorMsg || null , response: response || '' });
}
