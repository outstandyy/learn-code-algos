function promiseAllWithMaxConcurrent(max, tasks) {
	let nextTasks = tasks.splice(max);
	let currentTasks = tasks;
	let resolved = [];
	let processed = 0;

	return new Promise(resolve => {
		currentTasks.forEach(task => {
			const current = task();

			current.then(res => {
				resolved.push(current);
				executeNextTasks();
				return res;
			});
		});

		function executeNextTasks() {
			if (processed === nextTasks.length) {
				resolve(Promise.all(resolved));
			} else {
				resolved.push(nextTasks[processed]().then(res => {
					executeNextTasks();
					return res;
				}));
				processed++;
			}
		}
	});
}

// Promise.allConcurrent = n => list => promiseAllWithMaxConcurrent(n, list);

const tasks = [
	() => fetch('https://jsonplaceholder.typicode.com/todos/1'),
	() => fetch('https://jsonplaceholder.typicode.com/todos/2'),
	() => fetch('https://jsonplaceholder.typicode.com/todos/3'),
	() => fetch('https://jsonplaceholder.typicode.com/todos/4'),
];

tasks[0]().then(res => console.log(res));

// promiseAllWithMaxConcurrent(2, tasks).then(res => console.log(res));
