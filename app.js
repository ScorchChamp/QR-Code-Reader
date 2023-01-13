const outputElement = document.getElementById('output-text');

function scanQRCodes() {
    var inputImage = document.getElementById("inputImage");
    var file = inputImage.files[0];

    var reader = new FileReader();
    reader.onload = function (e) {
        var img = new Image();
        img.src = e.target.result;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var qr = jsQR(imageData.data, imageData.width, imageData.height);
            if (qr) {
                outputElement.textContent = qr.data;
            }
        }
    };
    reader.readAsDataURL(file);
}