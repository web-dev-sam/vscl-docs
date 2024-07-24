# Examples

::: details Git Issues
Here is an example of how you can link to a git issue.

````js
export default {
  links: [
    {
      include: "*.js",
      pattern: /git#\d+/g,
      handle: ({ linkText }) => {
        const issue = linkText.replace("git#", "")
        return {
          target: `https://github.com/webry-com/vscode-links/issues/${issue}`,
        }
      },
    },
  ],
}
````

![Clickable: "git#123"](./assets/examples/out-git.png)
:::


