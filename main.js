import("https://deno.land/install.sh")
let Webs
function gen() {
  const Ip = (localStorage.getItem("IP")).replaceAll(".","")
  let Iprocess = "";
  for (let i = 0; i < Ip.length-1; i+=2) {
    Iprocess += 9-(Ip[i+1])
    Iprocess += Math.floor(Math.random()*10)
    Iprocess += Ip[i]
    Iprocess += Math.floor(Math.random()*10)
  }
  Iprocess += Ip[Ip.length-1]
  Iprocess += Math.floor(Math.random()*10)
  output.innerHTML = Iprocess;
  // server.js

const server = Deno.listen({ port: 6942 });


for await (const conn of server) {
  handleHttp(conn);
}

async function handleHttp(conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const { request, respondWith } = requestEvent;

    const { socket, response } = Deno.upgradeWebSocket(request);

    socket.onopen = () => {
      console.log("Client connected");
      socket.send("Hello from server!");
    };

    socket.onmessage = (event) => {
      console.log("Message from client:", event.data);
      socket.send("Echo: " + event.data);
    };

    socket.onclose = () => {
      console.log("Client disconnected");
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    await respondWith(response);
  }
}

}
function sub(){
  let inpv = input.value
  let inpvp = ""
  for (let i = 0; i < inpv.length-2; i+=4) {
    inpvp += inpv[i+2]
    inpvp += 9-inpv[i]
  }
  inpvp += inpv[inpv.length-2];
  inpvp = inpvp.slice(0,3)+"."+inpvp.slice(3,6)+"."+inpvp.slice(6,7)+"."+inpvp.slice(7);
  WebS = new WebSocket("wss://"+inpvp);
WebS.onopen = function(event) {
    WebS.send("Are we... Connected?")
    WebS.addEventListener("message", (event) => {
  document.write(event.data);
})
}
}
