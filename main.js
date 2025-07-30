//let CryptoJS = (import("https://github.com/brix/crypto-js"));
/*async function GetIp(){
  return await(fetch("https://api.ipify.org?format=json"))
}
GetIp().then(ip => {
  console.log(ip)
  document.getElementById("out").innerHTML = ip;
});*/
try (java.util.Scanner s = new java.util.Scanner(new java.net.URL("https://api.ipify.org").openStream(), "UTF-8").useDelimiter("\\A")) {
    document.getElementById("out").innerHTML = ("My current IP address is " + s.next());
} catch (java.io.IOException e) {
    e.printStackTrace();
}
/*function sub() {
  console.log(CryptoJS.AES.encrypt(document.getelementbyid("in").value, "jsjjsjsidjusiskjsigooakwoockzopwlsoosspkgjbvkskj83"))
}*/
