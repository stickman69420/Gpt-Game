function gen() {
  const Ip = (localStorage.getItem("IP")).replaceAll(".","")
  let Iprocess = "";
  for (let i = 0; i < Ip.length-1; i+=2) {
    Iprocess += 9-(Ip[i+1])
    Iprocess += Math.floor(Math.random()*10)
    Iprocess += Ip[i]
    Iprocess += Math.floor(Math.random()*10)
  }
  console.log(Iprocess)
  output.innerHtml = Iprocess;
}
function sub(){
  console.log("nothing")
}
