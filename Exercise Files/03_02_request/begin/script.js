fetch("https://hplussport.com/api/products.php?order=price")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
       for (items in jsonData){
        var productName = jsonData[items].name;
        var products = document.createElement("li")
        products.innerHTML = "Product: " + productName;
        products.className = "products";
        document.body.appendChild(products);

        var productImg = jsonData[items].image;
        var image = document.createElement("img");
        image.setAttribute('src', productImg);
        document.body.appendChild(image);

        var productPrice = jsonData[items].price;
        var price = document.createElement("h2");
        price.innerHTML = "Price: $" + productPrice;
        document.body.appendChild(price); 
    }

    })