function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= t) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}

let logger = (args) => console.log(`My args are ${args}`);
let debouncedLogger = debounce(logger, 2000);

const input = document.getElementById("input__task");
input.onkeypress = function (evt) {
  evt = evt || window.event;
  var charCode = evt.which || evt.keyCode;
  var charStr = String.fromCharCode(charCode);
  if (/[a-z0-9]/i.test(charStr)) {
    debouncedLogger([input.value]);
  }
};
