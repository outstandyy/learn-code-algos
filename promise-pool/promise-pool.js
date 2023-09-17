// https://gist.github.com/jcouyang/632709f30e12a7879a73e9e132c0d56b

function limitConcurrent(urls, max) {
	let processingNumberOfTasks = 0;
	let current = 0;

	return new Promise((resolve) => {
		function run() {
			if (current === urls.length && processingNumberOfTasks === 0) {
				resolve();
			}
			while (current < urls.length && processingNumberOfTasks < max) {
				processingNumberOfTasks++;
				fetch(urls[current++]).then((res) => {
					processingNumberOfTasks--;
					run();
				});
			}
		}

		run();
	});
}

const urls = [
	'https://jsonplaceholder.typicode.com/todos/1',
	'https://jsonplaceholder.typicode.com/todos/2',
	'https://jsonplaceholder.typicode.com/todos/3',
	'https://jsonplaceholder.typicode.com/todos/4',
];

limitConcurrent(urls, 2).then()
limitConcurrent(urls, 1).then();
