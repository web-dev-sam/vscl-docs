# Examples

::: details Git Issues
Here is an example of how you can link to a git issue.
![](./assets/examples/out-git.png)

```js
export default {
  links: [
    {
      include: "*.js",
      pattern: /git#\d+/g,
      handle: ({ linkText }) => {
        const issue = linkText.replace("git#", "");
        return {
          target: `https://github.com/webry-com/vscode-links/issues/${issue}`,
        };
      },
    },
  ],
};
```

:::

::: details ESLint Ignore Comments
How you can link to the ESLint docs for ignored rules.
![](./assets/examples/eslint-comment.png)

```js
export default {
  links: [
    {
      pattern: [
        /\/\*\s*eslint-disable-next-line(?<link>\s+.*)\*\//g,
        /\/\*\s*eslint-disable-line(?<link>\s+.*)\*\//g,
        /\/\*\s*eslint-disable(?<link>\s+.*)\*\//g,
      ],
      handle: ({ linkText }) => {
        const rules = linkText
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

        return {
          target: `https://eslint.org/docs/latest/rules/${rules[0]}`,
          tooltip: `Open ESLint Rules Reference`,
          buttons: rules.map((rule) => {
            return {
              title: rule,
              target: `https://eslint.org/docs/latest/rules/${rule}`,
            };
          }),
        };
      },
    },
  ],
};
```

:::


::: details ESLint Config Rules
How you can link to the ESLint docs for rules in your config.
![](./assets/examples/eslint-config.png)

```js
export default {
  links: [
    {
      include: "eslint.config.js",
      pattern: [/      ["'`]?(?<link>[a-z0-9-]+)["'`]?:/g],
      handle: ({ linkText }) => {
        return {
          target: `https://eslint.org/docs/latest/rules/${linkText}`,
          tooltip: `Open ESLint Rules Reference`,
        };
      },
    },
  ],
};
```

:::