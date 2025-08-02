# VSCode Links

With this extension you can create custom links in VSCode that can link to files, websites, or even run commands.

## Quick Start

1. Install the extension [here](https://marketplace.visualstudio.com/items?itemName=webry.vsc-links).
2. Run the command `VSC Links: Create Config File` to open the links file. _(Ctrl + Shift + P)_
3. Run `npm add -D vscl` to install the types for the config.
4. Learn from examples [here](/examples)

## Config

A configuration file may be named any of the following:

- `vsc-links.config.js` (or `.cjs`, `.mjs`)
- `vsc-links.config.ts` (or `.cts`, `.mts`)

The file should export an object with the following properties:

### `links`

This is an array of objects that define the links. These are properties of that object:

- `include` (string?): A glob pattern to match files. Can be an array of strings. Default: `"*"`
- `exclude` (string?): A glob pattern to exclude files. Can be an array of strings. Default: `[]`
- `pattern` (string | RegExp): A regular expression or literal string to match the link. Can be an array.
- `handle` (function): A function that will be called when a link was found. Check [handle](#handle) for more.

### `extends`

This is a string or an array of strings that point to other config files to extend. Example: `"./other-config.js"`

## Details

### Handle Function {#handle}

The `handle` function will be called when a link was found. It should return the specific details for the found link. Here you can convert the found link to a target, tooltip, description, etc.

**Arguments:** Object with:

- `linkText`: The text of the found link (based on the pattern).
- `workspace`: A template tag function to create workspace-relative paths. Check [targets](#target) for more.
- `file`: A template tag function to create absolute paths. Check [targets](#target) for more.
- `log`: A function to log messages to the `VSCode Links` output.

**Returns:** Object with:

- `target`: The target of the link.
- `tooltip` (optional): A title for the link like "Follow Link."
- `description` (optional): A markdown description of the link that will show on hover.
- `jumpPattern` (optional): A regular expression (or string) to jump to if the link target is a file.
- `buttons` (optional): An array of objects representing buttons which will be shown above the markdown description. See [buttons](#buttons) for more.

```js
handle(options) {
    const { linkText, workspace, file, log } = options
    return {
        target: "https://google.com",
        tooltip: "Follow Link",
        description: "*This is a link to google*",
        buttons: [
            {
                title: "Open in Browser",
                target: "https://google.com"
            },
            {
                title: "Copy to Clipboard",
                action: () => {
                    copyToClipboard("google")
                }
            }
        ]
    }
}
```

### Targets {#target}

The target of a link can be any of the following:

- A normal link: e.g. `https://google.com`
- A file link: e.g. `file://path/to/file.txt` _(Beware in Windows its `file:///` instead of `file://`)_

You can use the `workspace` and `file` utilities from the [handle](#handle) function to help create the target. Examples:

```js
const { workspace, file } = options;
const relativeTarget = workspace`src/file.txt`;
const absoluteTarget = file`complete/absolute/path/to/file.txt`;
```

### Buttons

Buttons will be shown above the markdown description and the link. They are represented through an array of objects with the following properties:

- `title`: The text of the button.
- `target`: The target of the button. If set the `action` will not run.
- `action`: A function to run when the button is clicked. Will not run if button `target` is set. This function can be async.

```js
{
    title: "Open in Browser",
    target: "https://google.com"
},
{
    title: "Copy to Clipboard",
    action: () => {
        copyToClipboard("google")
    }
}
```
