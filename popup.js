function changeLikes(){
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Like", "g"), "Do not care about anime");
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  	renderStatus('Eliminating cancer...');
	changeLikes();
	renderSTatus('Cancer eliminated!');
});
