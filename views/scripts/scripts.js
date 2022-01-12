var mini = document.getElementById('mini');
var output = document.getElementById('output');
var download = document.getElementById('download');
var input = document.getElementById('input');
function download1(text) {
  var element = document.createElement('a');
  element.setAttribute('href',
    'data:text/plain;charset=utf-8,' +
    encodeURIComponent(text));
  element.setAttribute('download', "main.min.js");
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
download.addEventListener('click', (e) => {
  e.preventDefault();
  output.select();
  output.setSelectionRange(0, 999999999);
  var data = output.value;
  download1(data);
})


mini.addEventListener('click', (e) => {
  e.preventDefault()
  var first = {
    code: input.value
  }
  var reqest = JSON.stringify(first)
  fetch("http://127.0.0.1:3000/v1/result", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: reqest
  }).then(res => res.json()).then(data => output.innerHTML = data.code)

})
var button = document.getElementById('copy')
button.addEventListener('click', (e) => {
  e.preventDefault()
  output.select();
  output.setSelectionRange(0, 999999999);
  navigator.clipboard.writeText(output.value);
  alert("Copied");
})