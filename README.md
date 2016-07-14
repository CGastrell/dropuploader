# dropuploader

Single simple react component based on [react-dropzone](https://github.com/okonet/react-dropzone)

## Test

### Scenario
  * Developed some react component with [heatpack](https://github.com/insin/react-heatpack)
  * Built the [smallest version of it](https://github.com/CGastrell/dropuploader) and...
  * Want to put it on a live page simple and fast

### Files

#### webpack.config.js
I tried copying the same config the guys from [heatpack](https://github.com/insin/react-heatpack) are using,
but had to get rid of all the hot-reload and babel plugins involved in that matter.
The result is the one used in this repo which, I think, is pretty decent.

### mapper.js
This is the fake entry point for webpack. Why? Because heatpack asumes your little component
will `export default React.createClass`. And so, to be able to access this component from the page, I'll
importing the module and map it to some `window.ComponentClassName`. Long story short:
```javascript
import leComponent from 'index.js' 

// ClassyName will be the tag/component you will render. Store it on
// global so it is accessible
window.ClassyName = leComponent;
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
      <ClassyName />, /* le class name variable from the mapper file */
      document.getElementById('app')
    );
  </script>
</body>
```

#### build/
Well... the webpack build will go here as `bundle.js`

### Instructions
This is some sort of boilerplate. The idea is:
  * Copy webpack.config.js
  * Get dev dependencies (for webpack to work correctly)
  * run `webpack -p` (-p is *production* mode, not much difference)
  * Get your bundle from `./build` directory and import it on a live page with `React` and `ReactDOM`
  * Render it in the hardcoded snippet:
```<script type="text/babel">ReactDOM.render(<YOUR_MAPPED_CLASSNAME />, document.wherever);</script>```

### Next
Keep checking on webpack config to get the most performant solution.

# GOOD LUCK!

Check https://github.com/cgastrell/dropage for a single [express](http://expressjs.com/) page
serving this (exact) solution.
