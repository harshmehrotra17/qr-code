function generateQRCode() {
    var textInput = document.getElementById('textInput').value;
    var qrcodeContainer = document.getElementById('qrcode');

    if (textInput.trim() !== '') {
        generateQRCodeFromText(textInput);
    } else {
        alert('Please enter text or URL.');
    }
}

function generateQRCodeFromText(text) {
    var qrcodeContainer = document.getElementById('qrcode');
    
    // Clear existing QR code
    qrcodeContainer.innerHTML = '';

    // Generate QR code
    var qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 128,
        height: 128,
    });
}

function downloadQRCode() {
    var qrcodeContainer = document.getElementById('qrcode');
    var img = qrcodeContainer.getElementsByTagName('img')[0];

    if (img) {
        alert('Download button clicked!');
        var a = document.createElement('a');
        a.href = img.src;
        a.download = 'qrcode.png';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    } else {
        alert('Generate a QR code first.');
    }
}
