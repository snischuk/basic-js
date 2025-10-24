// const { NotImplementedError } = require('../lib');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  checkArguments(...args) {
    if (args.some(arg => typeof arg !== 'string' || !arg.trim())) {
      throw new Error('Incorrect arguments!');
    }
  }

  transform(message, key, encrypt = true) {
    this.checkArguments(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const isAlphabetic = /[A-Z]/.test(messageChar);

      if (isAlphabetic) {
        const keyChar = key[keyIndex % key.length];
        const keyShift = encrypt ? this.alphabet.indexOf(keyChar) : -this.alphabet.indexOf(keyChar);
        const newIndex = (this.alphabet.indexOf(messageChar) + keyShift + this.alphabet.length) % this.alphabet.length;
        result.push(this.alphabet[newIndex]);
        keyIndex++;
      } else {
        result.push(messageChar);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  encrypt(message, key) {
    return this.transform(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.transform(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
