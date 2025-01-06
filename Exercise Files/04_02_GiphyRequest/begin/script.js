// List of ratings you want to fetch
const ratings = ['g', 'pg', 'pg-13', 'r'];

fetch("https://api.giphy.com/v1/gifs/random?api_key=QF1MqCKevJsJwUSyLOL7rpnCV4OJKgWl&tag=+cat&rating=${rating}")
    // Sends an HTTP GET request to the Giphy API's random GIF endpoint, 

    .then(function (response) {
        if (response.status == 200){
            return response.json(); 
        }
        else {
            alert("Problem");
            console.log("Problem")
        }
    })
    // Handles the response from the API, calling the `json()` method to parse the JSON data from the response.

    .then(function (jsonData) {
        console.log(jsonData);
        // Logs the parsed JSON data

        var gifUrl = jsonData.data.images.original.url;
        // Extracts the URL of the original GIF image from the JSON data.

        console.log(gifUrl);
        // Logs the GIF URL to the console for debugging or verification.

        var gifImg = document.createElement("img");
        // Creates a new <img> element dynamically in the DOM.

        gifImg.setAttribute("src", gifUrl);
        // Sets the "src" attribute of the <img> element to the extracted GIF URL, linking the image to its source.

        document.body.appendChild(gifImg);
        // Appends the created <img> element to the body of the document, making the GIF visible on the webpage.

        var gifTitle = jsonData.data.title;
        // Extracts the title of the GIF from the JSON data.

        var title = document.createElement("h2");
        // Creates a new <h1> element dynamically in the DOM for the GIF's title.

        title.innerHTML = gifTitle;
        // Sets the content of the <h1> element to the GIF's title.

        document.body.appendChild(title);
        // Appends the created <h1> element to the body of the document, displaying the title on the webpage.
    })
// The `.then()` chaining ensures that the operations happen sequentially:
// 1. The API call is made.
// 2. The response is parsed as JSON.
// 3. The extracted data is processed and added to the webpage dynamically.


.catch(function(error){
    console.log("There is a problem", error);
})