const fs = require('fs');

const content = 'HTML, CSS, Javascript, Typescript, MongoDB, Express.js, React.js, Node.js';

fs.writeFile('src.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        process.exit(1);
    }
    console.log('src.txt created successfully');
});
