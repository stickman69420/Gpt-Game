//let CryptoJS = (import("https://github.com/brix/crypto-js"));
async function GetIp(){
  await let out = (fetch("https://api.ipify.org"))
  return out
}
document.getElementById("out").innerHTML = GetIp()
/*function sub() {
  console.log(CryptoJS.AES.encrypt(document.getelementbyid("in").value, "jsjjsjsidjusiskjsigooakwoockzopwlsoosspkgjbvkskj83"))
}*/
