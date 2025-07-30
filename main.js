//let CryptoJS = (import("https://github.com/brix/crypto-js"));
async function GetIp(){
  await return (fetch("https://api.ipify.org"))
}
document.getElementById("out").innerHTML = GetIp()
/*function sub() {
  console.log(CryptoJS.AES.encrypt(document.getelementbyid("in").value, "jsjjsjsidjusiskjsigooakwoockzopwlsoosspkgjbvkskj83"))
}*/
