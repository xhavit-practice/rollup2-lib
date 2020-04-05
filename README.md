# install

`npm install rollup2-lib`

# dependencies

-   lodash
-   mockjs

# usage

## use `script` tag

```html
<script src="node_modules/lodash/lodash.js"></script>
<script src="node_modules/mockjs/dist/mock.js"></script>
<script src="node_modules/rollup2-lib.umd.js"></script>
```

## use `CommonJS`, such as node

```javascript
const rollup2Lib = require('rollup2-lib');
```

## use `ES Module`

### use with `script` tag

```html
<script src="node_modules/lodash/lodash.js"></script>
<script src="node_modules/mockjs/dist/mock.js"></script>
<script src="node_modules/rollup2-lib.es.js" type="module"></script>
```

### use with `import` sentence

```html
<script src="node_modules/lodash/lodash.js"></script>
<script src="node_modules/mockjs/dist/mock.js"></script>
<script src="your-mian.js"></script>
```

```javascript
// your-main.js
import rollup2Lib from 'rollup2-lib';
```

## use `AMD`, such as requirejs

### use with `lodash` `AMD` package

```html
<script src="node_modules/requirejs/require.js"></script>
<script>
    require.config({
        paths: {
            // use lodash-amd
            lodash: 'node_modules/lodash-amd',
            mockjs: 'node_modules/mockjs/dist/mock',
            rollup2Lib: 'node_modules/rollup2-lib.umd',
        },
    });
</script>
<script src="path/to/your-main.js"></script>
```

### use with `lodash` `UMD` package
Becase the dependencies of `rollup2-lib` are `lodash/join` and `lodash/random`. so if you load whole `lodash` package, module `lodash/join` will load fail. there's a help function to defind named module(`define('lodash/join', ['lodash'], function(){ return lodash.join })`) to solve this problem.
```html
<script src="node_modules/requirejs/require.js"></script>
<script src="node_modules/rollup2-lib/rollup2-lib.umd.help.js"></script>
<script>
    require.config({
        paths: {
            // use lodash
            lodash: 'node_modules/lodash/lodash',
            mockjs: 'node_modules/mockjs/dist/mock',
            rollup2Lib: 'node_modules/rollup2-lib.umd',
        },
    });
</script>
```
