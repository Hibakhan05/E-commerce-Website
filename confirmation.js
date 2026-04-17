var params = new URLSearchParams(window.location.search);
document.getElementById("customerName").innerHTML = params.get("name");