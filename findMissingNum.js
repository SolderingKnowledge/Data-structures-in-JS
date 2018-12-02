class SpliceAndFindMissingNum {
  constructor() {
    this.count = [];
  }
  countTill(hundred) {
    for (var i = 1; i <= hundred; i++) {
      this.count.push(i);
    }
    return this.count;
  }
  hideNumber(index, item) {
    return this.count.splice(index, item);
  }

  whatsLeft() {
    return this.count;
  }
  findMissingNum(nums) {
    var missing = -1;
    for (var i = 1; i <= nums.length; i++) {
      if (nums.indexOf(i) == -1) {
        missing = i;
      }
    }
    return missing;
  }
}

var instance = new SpliceAndFindMissingNum();
instance.countTill(100);
instance.hideNumber(20, 1);
console.log(instance.whatsLeft());
console.log(instance.findMissingNum(instance.whatsLeft()));
