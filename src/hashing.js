const crypto = require('crypto');
const config = require('../config');

export function takeHash(password) {
    const salt = config.salt;
    const hash = crypto.Hmac('sha512', salt);
    hash.update(password);
    const res = hash.digest('hex');
    return res;
}