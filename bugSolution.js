const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  const result = await somePromiseThatMightReject();
  return result;
}

function somePromiseThatMightReject() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might lead to an error
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve('Operation completed successfully!');
    }
  });
}