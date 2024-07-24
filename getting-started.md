# VSCode Links

With this extension you can create custom links in VSCode that can link to files, websites, or even run commands.

## Quick Start

1. Install the extension [here](https://marketplace.visualstudio.com/items?itemName=web-dev-sam.vscode-links).
2. Run the command `VSC Links: Create Config File` to open the links file. _(Ctrl + Shift + P)_
3. Run `npm add -D vscl` to install the types for the config.
4. Learn from examples [here](/examples)

## Config

A configuration file may be named any of the following:

-   `vsc-links.config.js` (or `.cjs`, `.mjs`)
-   `vsc-links.config.ts` (or `.cts`, `.mts`)

The file should export an object with the following properties.

### Property: `links`

This is an array of objects that define the links. These are properties of that object:

-   `include` (string?): A glob pattern to match files. Can be an array of strings. Default: `"*"`
-   `exclude` (string?): A glob pattern to exclude files. Can be an array of strings. Default: `[]`
-   `pattern` (string | RegExp): A regular expression or literal string to match the link. Can be an array.
-   `handle` (function): A function that returns an object with the following properties:
    -   `target` (string): The [target](#target) of the link.
    -   `tooltip` (string?): A title for the link like "Follow Link."
    -   `description` (string?): A markdown description of the link that will show on hover.
    -   `jumpPattern` (string? | RegEx?): A regular expression (or string) to jump to if the link target is a file.
    -   `buttons` (object?): An array of objects representing buttons which will be shown above the markdown description with the following properties:
        -   `title` (string): The text of the button.
        -   `target` (string): The target of the button. If set the `action` will not run.
        -   `action` (function): A function to run when the button is clicked. Will not run if button `target` is set.

### Link Targets {#target}

The target of a link can be any of the following:

-   A normal link: e.g. `https://google.com`
-   A file link: e.g. `file://path/to/file.txt` _(Beware in windows its `file:///` instead of `file://`)_
