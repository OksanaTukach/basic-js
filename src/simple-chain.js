const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.arr.length) {
      this.arr.splice(position - 1,1)
      return this;
    } else{
      this.arr.length = 0;
      throw Error('invalid position')
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
