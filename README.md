# Usage

```
$ npm install
$ npm start
```

And run in browser [http://localhost:8001/](http://localhost:8001/).

Reproduce bug:
1. Clicks on "About" link. Then you should go to [http://localhost:8001/about](http://localhost:8001/about) and see "About" instead "Home" under hyperlinks.
2. Click on "Back" on your browser. You should back to [http://localhost:8001/](http://localhost:8001/) and see "Home" **but you see "About"**!

When you change `LayoutContainer` to `Layout` in *src/client.js:61* and *src/client.js:65* then it work correctly but you lost redux connection.
