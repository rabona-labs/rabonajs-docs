# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## RabonaJS 

RabonaJS provides a simple and intuitive syntax for plotting soccer/football events as layers on top of a soccer field. Powered by D3.js, it is designed to be easy to use and to integrate with js notebooks such as Observable. Checkout the [documentation](https://orabazu.github.io/rabonajs-docs/).

```js
import Rabona from "rabonajs";

const pitchOptions = {
  height: 80, //px
  width: 120, //px
  padding: 100, //px
  linecolour: "#ffffff",
  fillcolour: "#7ec850",
};

// initialize the pitch on the "pitch" div with a given options
const pitch = Rabona.pitch("pitch", pitchOptions);
```

```html
<div id="pitch"></div>
```

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
