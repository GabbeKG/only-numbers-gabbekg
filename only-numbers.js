var onlyNumberInput = document.getElementById("only-num");
onlyNumberInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("only-num-btn").click();
  }
});
function str(val) {
  let myString = document.getElementById("num").value;
  let res = (myString = myString.replace(/\D/g, ""));
  document.getElementById("num").value = res;
  document.getElementById("name-label").value = "Clean number";
  console.log(res);
  document.body.innerHTML = document.body.replace(
    /Dirty number/g,
    "Cleaned number"
  );
}
