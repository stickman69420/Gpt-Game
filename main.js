//let CryptoJS = (import("https://github.com/brix/crypto-js"));
/*async function GetIp(){
  return await(fetch("https://api.ipify.org?format=json"))
}
GetIp().then(ip => {
  console.log(ip)
  document.getElementById("out").innerHTML = ip;
});*/
function getIP(json) {
    document.write("My public IP address is: ", json.ip);
  }
/*function sub() {
  console.log(CryptoJS.AES.encrypt(document.getelementbyid("in").value, "jsjjsjsidjusiskjsigooakwoockzopwlsoosspkgjbvkskj83"))
}*/
