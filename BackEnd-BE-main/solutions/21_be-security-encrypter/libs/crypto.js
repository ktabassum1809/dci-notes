function rot(input) {
    return input.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13))
    })
}

const stringReplacements = {
    'a': 'aa',
    'e': 'eee',
    'V': 'CX!',
    'y': '#i!',
    '3': '55',
    '4': '33',
    'like': '####',
    '-': '#@potpourri@#',
}

/**
 * Encrypts the given inputString
 *
 * @param String message to encrypt
 * @returns String encrypted message
 */
export function encrypt(message) {
    // rot13
    const rotated = rot(message)

    // string replacement
    return Object.keys(stringReplacements).reduce((acc, key) => {
        return acc.replace(new RegExp(key, 'g'), stringReplacements[key])
    }, rotated)
}

/**
 * Decrypts the given inputString encrypted string
 *
 * @param String encrypted encrypted message
 * @returns String clear text
 */
export function decrypt(encryptedMessage) {
    // String replacement reverse
    const rotated = Object.keys(stringReplacements).reduce((acc, key) => {
        return acc.replace(new RegExp(stringReplacements[key], 'g'), key)
    }, encryptedMessage)

    // rot13 reverse
    return rot(rotated)
}
