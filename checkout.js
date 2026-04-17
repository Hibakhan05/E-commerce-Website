var params = new URLSearchParams(window.location.search);
var bookName = params.get("name");
var bookPrice = parseFloat(params.get("price"));

document.getElementById("bookName").innerHTML = bookName;
document.getElementById("bookPrice").innerHTML = bookPrice;
document.getElementById("bookImg").src = params.get("src");
document.getElementById("summaryPrice").innerHTML = bookPrice;
document.getElementById("totalPrice").innerHTML = bookPrice;

var radios = document.querySelectorAll('input[name="delivery"]');
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function() {
        var deliveryCharge = parseFloat(this.value);
        var total = bookPrice + deliveryCharge;
        document.getElementById("deliveryPrice").innerHTML = deliveryCharge;
        document.getElementById("totalPrice").innerHTML = total;
    });
}
function confirmOrder() {
    var name = document.getElementById("userName").value;
    var phone = document.getElementById("userPhone").value;
    var address = document.getElementById("userAddress").value;

    if (name == "" || phone == "" || address == "") {
        alert("Please fill all fields!");
        return;
    }

    window.location.href = "confirmation.html?name=" + encodeURIComponent(name);
}