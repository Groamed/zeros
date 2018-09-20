module.exports = function getZerosCount(number) {
  // your implementation
  var res = 0, mnoz = 5;
  while(number >= mnoz)
  {
    res+=Math.floor(number/mnoz);
    mnoz*=5;
  }
  return res;
}
