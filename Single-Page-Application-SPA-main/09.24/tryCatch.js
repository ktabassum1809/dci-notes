try {
    // Execute code that may or may not work
    const h1 = document.querySelector('h1'); // null
    h1.innerText = 'Hello World';
} catch (error) {
    // If it din't work, do something else
    console.log('Something went wrong');
    console.log(error);
    console.log(error.message);
}