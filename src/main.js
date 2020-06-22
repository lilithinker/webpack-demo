import { take,map,combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';
import { sum } from './lib/a';

const source = interval(1000).pipe(take(2));
const example = source.pipe(map(val=>interval(1000).pipe(
    map(i=>`result (${val}):${i}`),
    take(5)
)));

const combined = example.pipe(combineAll());

combined.subscribe(res=>{
    console.log(res);
});

console.log(sum(1,2));