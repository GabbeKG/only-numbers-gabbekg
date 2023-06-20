function addEnterKeyListener() {
  var onlyNumberInput = document.getElementById("only-num");
  onlyNumberInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });
}

function str() {
  let myString = document.getElementById("num").value;
  let res = myString.replace(/\D/g, "");
  document.getElementById("num").value = res;
  document.getElementById("name-label").innerHTML = "Clean number";
  console.log(res);
  document.body.innerHTML = document.body.innerHTML.replace(
    /Dirty number/g,
    "Cleaned number"
  );
}
module.exports = {
  addEnterKeyListener,
  str,
};
