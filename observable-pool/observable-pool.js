import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

function createAsyncOp(id, delay) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/todos/' + id).then(() => {
				res(id);
			}), delay;
		});
	});
}

const source = from([
	() => createAsyncOp(1, 0),
	() => createAsyncOp(2, 100),
	() => createAsyncOp(3, 0),
	() => createAsyncOp(4, 0),
	() => createAsyncOp(5, 200),
	() => createAsyncOp(6, 0),
]);

source
	.pipe(
		mergeMap((obs) => obs(), 2),
	)
	.subscribe({
		next: (v) => console.log(v),
	});

