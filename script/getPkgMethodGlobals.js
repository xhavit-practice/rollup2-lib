import deps from './deps';

/**
 * 打包为iife的情况， 如果依赖的情况如：
 * lodash/join
 * 则打包为：
 * (global = global || self, global.xxx = factory(global.join))
 * 一般情况下，在前端用iife的情况下都是引用整个lodash包，所以在实际使用的时候找不到join方法，
 * 这里利用output.globas配置做一下修改，比如：
 * globals: {
 *     'lodash/join': '_.join',
 * }
 * 则打包为：
 * (global = global || self, global.xxx = factory(global._.join))
 * 这样引入整个lodash包就可以正常使用
 * 这个函数用做globas的生成
 * @param {Objects} globals 类似：{ lodash: '_' }
 */
export default function getPkgMethodGlobals(globals) {
    const res = {};
    for (let [name, alias] of Object.entries(globals)) {
        deps[name].forEach(v => {
            res[[`${name}/${v}`]] = `${alias}.${v.split('/').join('.')}`;
        });
    }
    return res;
}
