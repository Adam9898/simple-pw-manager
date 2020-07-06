export class PwGeneratorCryptoService {

  constructor() {
  }

  /**
   * The original algorithm is made by DANIEL LEMIRE, Université du Québec (TELUQ), Canada.
   * As javascript's crypto api doesn't support user-defined intervals for it's random value generator (only the popular bit lengths
   * by initializing a typed array), it is up to the programmer to implement an algorithm to reject the values which are out of the
   *  desired range. This method does just that, implementing an algorithm that is made by Daniel Lemire.
   *  You can find his research paper online.
   */
  generateRandomNumber(max: number) {
    const arr = new Uint8Array(1);
    crypto.getRandomValues(arr);
    let rndNum = arr[0];
    let m = rndNum * max;
    let l = m % 256;
    if (l < max) {
      const t = (256 - max) % max;
      do {
        crypto.getRandomValues(arr);
        rndNum = arr[0];
        m = rndNum * max;
        l = m % 256;
      } while (l < t);
    }
    return Math.trunc(m / 256); // String.fromCharCode works with decimal numbers too, but IMO this is more elegant
  }

  generateRandomAsci() {
    return this.generateRandomNumber(95) + 32;
  }

  generatePassword(length: number) {
    let password = '';
    for (let i = 0; i < length; i++) {
      password += String.fromCharCode(this.generateRandomAsci());
    }
    return password;
  }
}
