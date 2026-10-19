(function () {
  var box = document.getElementById('consenso');
  if (!box) return;
  var btns = document.querySelectorAll('.pay-btn');
  function sync() {
    for (var i = 0; i < btns.length; i++) btns[i].disabled = !box.checked;
  }
  box.checked = false;
  box.addEventListener('change', sync);
  sync();
})();
