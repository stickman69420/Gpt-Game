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
  Iprocess += Ip[Ip.length-1]
  Iprocess += Math.floor(Math.random()*10)
  console.log(Iprocess);
  output.innerHTML = Iprocess;
}
function sub(){
  let inpv = input.value
  let inpvp = ""
  for (let i = 0; i < inpv.length-2; i+=4) {
    inpvp += inpv[i+2]
    inpvp += 9-inpv[i]
  }
  inpvp += inpv[inpv.length-2]
  inpvp = inpvp.slice(0,3)+"."+inpvp.slice(3,6)+"."+inpvp.slice(6,7)+"."+inpvp.slice(7)
  console.log(inpvp)
}
