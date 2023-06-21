function numOnly(myString) {
  let res = myString.replace(/\D/g, "");
  return res;
}
module.exports = numOnly;
