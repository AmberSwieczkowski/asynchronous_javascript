/* XMLHttpRequest information https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest */
const request = new XMLHttpRequest(); //request object used to send the request from the browser

/* XMLHttpRequest.readyState information https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
    value of 4 means that the request operation is complete */
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if(request.readyState === 4) {
        console.log(request, request.responseText);
    }

});

// Parameters are: Request Method, Where to Get Request From
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send(); //sends the request