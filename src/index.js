import method1 from './method1';
import method2 from './method2';
import method3 from './method3';
import { version } from '../package.json';

function main() {
    console.log('lib - mian');
    console.log(version);
    [(1, 2, 3)].map(v => {
        console.log(v);
    });
}

export default Object.assign(main, { method1, method2, method3 });
