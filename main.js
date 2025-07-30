function gen() {
  const Ip = (localStorage.getItem("IP")).replaceAll(".","")
  console.log(localStorage.getItem("IP"))
  let Iprocess = "";
  for (let i = 0; i < Ip.length-1; i+=2) {
    Iprocess += 9-(Ip[i+1])
    Iprocess += Math.floor(Math.random()*10)
    Iprocess += Ip[i]
    Iprocess += Math.floor(Math.random()*10)
  }
  console.log(Iprocess);
  output.innerHTML = Iprocess;
}
function sub(){
  let inpv = input.value
  let inpvp = ""
  for (let i = 0; i < inpv.length-1; i+=4) {
    inpvp += 9-inpv[i]
    inpvp += inpv[i]
  }
}
