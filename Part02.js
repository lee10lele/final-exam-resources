function billingFunction() {
    var checkbox = document.getElementById("same");
    var shippingName = document.getElementById("shippingName").value;
    var shippingZip = document.getElementById("shippingZip").value;
    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");

    if (checkbox.checked) {
        billingName.value = shippingName;
        billingZip.value = shippingZip;
    } else {
        billingName.value = "";
        billingZip.value = "";
    }
}