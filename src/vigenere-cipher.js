const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
    this.alphabet = Array(26)
      .fill('')
      .map((_, i) => String.fromCharCode(i + 65))
      .join('');
  }

  validateArgs(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
  }

  getUpperCasedArgs(message, key) {
    return [message.toUpperCase(), key.toUpperCase()];
  }

  encrypt(message, key) {
    this.validateArgs(message, key);
    [message, key] = this.getUpperCasedArgs(message, key);

    let keyOffset = 0;

    const encryptedMessage = [...message].reduce((acc, curr, i) => {
      if (this.alphabet.includes(curr)) {
        const keyChar = key[(i - keyOffset) % key.length];
        const charCode = (this.alphabet.indexOf(curr) + this.alphabet.indexOf(keyChar)) % 26;
        return [...acc, this.alphabet[charCode]];
      } else {
        keyOffset += 1;
        return [...acc, curr];
      }
    }, []);

    return this.directMachine ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }

  decrypt(message, key) {
    this.validateArgs(message, key);
    [message, key] = this.getUpperCasedArgs(message, key);

    let keyOffset = 0;

    const decryptedMessage = [...message].reduce((acc, curr, i) => {
      if (this.alphabet.includes(curr)) {
        const keyChar = key[(i - keyOffset) % key.length];
        const charCode =
          (this.alphabet.indexOf(curr) - this.alphabet.indexOf(keyChar)) % 26 < 0
            ? (this.alphabet.indexOf(curr) - this.alphabet.indexOf(keyChar) + 26) % 26
            : (this.alphabet.indexOf(curr) - this.alphabet.indexOf(keyChar)) % 26;
        return [...acc, this.alphabet[charCode]];
      } else {
        keyOffset += 1;
        return [...acc, curr];
      }
    }, []);

    return this.directMachine ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
