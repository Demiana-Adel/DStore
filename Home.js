//1
var xhr = new XMLHttpRequest();
//2
xhr.open("get", "https://fakestoreapi.com/products")
//3
xhr.send();
//4
xhr.addEventListener("load", () => {
    var products = JSON.parse(xhr.response)
    var existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    for (var prd of products) {
        var myheader = document.createElement("h3");
        myheader.textContent = prd.title;
        var myImg = document.createElement("img");
        myImg.src = prd.image;
        var mypragraph = document.createElement("p");
        mypragraph.textContent = prd.price + "$";
        var mydiv = document.createElement("div")
        mydiv.appendChild(myheader);
        mydiv.appendChild(myImg);
        mydiv.appendChild(mypragraph);
        document.body.appendChild(mydiv);
        (function(header, img, pragraph) {
            mydiv.addEventListener("click",  ()=> {
                existingProducts.push({
                    title: header.textContent,
                    price: pragraph.textContent,
                    image: img.src
                });
                localStorage.setItem("products", JSON.stringify(existingProducts));
            });
        })(myheader, myImg, mypragraph);
    
    }

});
