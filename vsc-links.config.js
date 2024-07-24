export default {
  links: [
    {
      include: "*.js",
      pattern: /git#\d+/g,
      handle: ({ linkText }) => {
        const issue = linkText.replace("git#", "")
        return {
          target: `https://github.com/webry-com/vscode-links/issues/${issue}`,
          tooltip: "Open Issue " + issue,
        }
      },
    },
  ],
}


// Clickable: "git#123"



