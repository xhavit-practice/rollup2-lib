# Install

`npm install rollup2-lib`

# Dependencies

-   lodash
-   mockjs

# Usage

## Browser

```html
<script src="../node_modules/lodash/lodash.js"></script>
<script src="../node_modules/mockjs/dist/mock.js"></script>
<script src="../node_modules/rollup2-lib/dist/rollup2-lib.umd.js"></script>
<script>
    rollup2Lib.method1();
</script>
```

## Node.js

```javascript
const rollup2Lib = require('rollup2-lib');

rollup2Lib.method1();
```

## Webpack

```javascript
import rollup2Lib from 'rollup2-lib';
// or
// import rollup2Lib from 'rollup2-lib/dist/rollup2-lib.es';
// or
// import rollup2Lib from 'rollup2-lib/dist/rollup2-lib.cjs';

rollup2Lib.method1();
```

## RequireJs

### Ues with lodash-amd package

```html
<script src="../node_modules/requirejs/require.js"></script>
<script>
    require.config({
        baseUrl: '..',
        paths: {
            // use lodash-amd
            lodash: 'node_modules/lodash-amd',
            mockjs: 'node_modules/mockjs/dist/mock',
            rollup2Lib: 'node_modules/rollup2-lib/dist/rollup2-lib.umd',
        },
    });
</script>
<script>
    require(['rollup2Lib'], function (rollup2Lib) {
        rollup2Lib.method1();
    });
</script>
```

### Ues with lodash package

```html
<!-- whether or not use core-js library depends on your browser environment -->
<!-- <script src="../node_modules/core-js-bundle/minified.js"></script> -->
<script src="../node_modules/requirejs/require.js"></script>
<script src="../node_modules/rollup2-lib/dist/rollup2-lib.umd.help.js"></script>
<script>
    require.config({
        baseUrl: '..',
        paths: {
            // use whole lodash library
            lodash: 'node_modules/lodash/lodash',
            mockjs: 'node_modules/mockjs/dist/mock',
            rollup2Lib: 'node_modules/rollup2-lib/dist/rollup2-lib.umd',
        },
    });
</script>
<script>
    require(['rollup2Lib'], function (rollup2Lib) {
        rollup2Lib.method1();
    });
</script>
```
