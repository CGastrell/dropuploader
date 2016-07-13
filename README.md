# dropuploader

Single simple react component based on react-dropzone

## Test

### Scenario
  * Developed some react component with heatpack
  * Want to build the smallest version of it and...
  * Want to put it on a live page

### Files

#### webpack.config.js
I tried copying the same config the guys from heatpack are using, but had to get rid of all the
hot-reload and babel plugins involved in that matter. The result is the one in this repo which, I think, is pretty decent.

### mapper.js
This is the fake entry point for webpack. Why? Because heatpack asumes you little component will `export default React.createClass`
and so, to be able to access this component I'll be mapping it some `window.ComponentClassName`. Long story short:
```javascript
import NAME from 'index.js' 

window.ClassyName = NAME;
```
This will allow you to manually render your ClassyName component on the page you want to insert it:
```html
<head>
  <script src="https://fb.me/react-15.2.1.min.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
  <script type="text/babel">
    ReactDOM.render(
      <ClassyName />,
      document.getElementById('app')
    );
  </script>
</body>
```

#### build/
Well... the webpack build will go here.

### Instructions
This is some sort of boilerplate. The idea is:
  * Copy webpack.config.js
  * Get dev dependencies (for webpack to work correctly)
  * run `webpack -p`
  * Get your bundle from `./build` directory and import it on a live page with `React` and `ReactDOM`
  * Render it with an extra:
```<script type="text/babel">ReactDOM.render(<YOUR_MAPPED_CLASSNAME />, document.wherever);</script>```

# GOOD LUCK!

Check https://github.com/cgastrell/dropage for a single express page serving this kind of solution
