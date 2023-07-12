// Function to capitalize the first letter of an array
function capitalize(arr){
    return arr.map(item => {
        if(typeof item === 'string' && item.length > 0){
            return item.charAt(0).toUpperCase() + item.slice(1);
        }
        return item;
    }) 
}

// Function to reverse an array
function reverse(arr){
    return arr.map(item => {
        if(typeof item === 'string'){
            return item.split('').reverse().join('');
        }
        return item;
    })
}

module.exports = {
    capitalize,
    reverse
};


// const os = require('os');
// console.log('Platform:', os.platform());
// console.log('Release:', os.release());
// console.log('Hostname:', os.hostname());
// console.log('CPUs:', os.cpus());
// console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');
// console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');
// console.log('Network Interfaces:', os.networkInterfaces());
// console.log('Constants:', os.constants);


// const http = require('http');
// // Sample book data
// const books = [
//     { id: 1, title: 'Book 1', author: 'Author 1' },
//     { id: 2, title: 'Book 2', author: 'Author 2' },
//     { id: 3, title: 'Book 3', author: 'Author 3' }
// ];

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/hello') {
//         // Handle GET request for books API
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(books));
//     } else {
//         // Handle other requests
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Endpoint not found');
//     }
// });
// const port = 8000;
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });



// const fs = require('fs');

// const content = 'This is fs write method';
// // Create a new file and write content to it
// fs.writeFile('example.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File created and content written successfully.');
//   }
// });



// const fs = require('fs');
// // import fs from 'fs';

// fs.readFile('./awdiz.txt', 'utf8' , (err, data) => {
//     if (err) console.log(err)
//     console.log(data)
// })



// // Let's illustrate the Node.js Event Loop with a simple example:
// // Step 1: Import required modules
// const fs = require('fs');

// // Step 2: Initiate an asynchronous I/O operation
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log('File contents:');
//   }
// });
// // Step 3: Perform a synchronous operation
// console.log('Synchronous operation: Hello, World!');
// // Step 4: Set a timer
// setTimeout(() => {
//   console.log('Timer expired: 1 second');
// }, 1000);
// // Step 5: Execute a callback function
// const callbackFunction = () => {
//   console.log('Callback function executed');
// };
// callbackFunction();