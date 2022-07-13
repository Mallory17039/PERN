var ReactDOM = require('react-dom');

(function () {
var root = ReactDOM.createRoot(
  document.getElementById('react')
);

console.log(ReactDOM)
console.log(root)
var element = <h1>Hello, world</h1>;
root.render(element);

})();
