const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('size');
const genBtn = document.getElementById('generateBtn');
const downBtn = document.getElementById('downloadBtn');

const body = document.querySelector('.qr-body');
let size = sizes.value;
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    // isEmptyQR();

});



genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyQR();
    generateQR();
})

downBtn.addEventListener('click',()=>{
    let img=document.querySelector('qr-body img');
    if(img!==null){
        let imgAtt=img.getAttribute('src');
        downBtn.setAttribute("href",imgAtt);
    }else{
        downBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyQR() {
    qrText.value.length > 0 ? generateQR() : alert("Enter the ural !!!!");
}


function generateQR() {
    body.innerHTML = "";
    new QRCode(body, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",


    })

}