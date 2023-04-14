const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const isValidPosition = position && typeof position === 'number' && this.chain[position];
    if (!isValidPosition) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.filter((_, i) => i + 1 !== position);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const linkedChain = this.chain.join('~~');
    this.chain = [];
    return linkedChain;
  },
};

module.exports = {
  chainMaker,
};
