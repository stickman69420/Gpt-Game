function sub() {
  const Ip = localStorage.getItem("IP")
  let Iprocess = Ip;
  console.log(Iprocess);
  for (let i = 0; i < Ip.length; i+=2) {
    Iprocess = Iprocess[0:i]+Ip[i];+Iprocess[i+1:-1]
    Iprocess = Iprocess[0:i+1]+Ip[i+1];+Iprocess[i+2:-1]
  }
  console.log(Iprocess);
}
