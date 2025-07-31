const octokit = new Octokit({ 
  auth: ${{ secrets.GITHUB_TOKEN }}
});
console.log(${{ secrets.GITHUB_TOKEN }})
