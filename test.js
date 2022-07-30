document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("activar").onchange = toggleActivar;
});
function toggleActivar() {
  var getInputText = document.querySelectorAll('.disabled input[type="text"]');
  getInputText[0].disabled = !getInputText[0].disabled;
}
