import { Octokit, App } from "https://esm.sh/octokit?dts";
const octokit = new Octokit({ 
  auth: ${{ secrets.GITHUB_TOKEN }}
});
console.log(${{ secrets.GITHUB_TOKEN }})
