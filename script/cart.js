var cartItems = JSON.parse( localStorage.getItem("cartItems"));
console.log('cartItems:', cartItems)

display(cartItems)
div = ""
function display(arr){
    arr.forEach(function(list){
        let div = document.createElement("div");
        div.setAttribute("class", "box");

        let img = document.createElement("img")
        img.setAttribute("class", "imgbox")
        img.src = list.strCategoryThumb;

        let name = document.createElement("h3");
        name.innerText = list.strCategory;

        let id = document.createElement("p")
        id.innerText = `Id: ${list.idCategory}`;

        let price = document.createElement("p");
        price.innerText = `Price: ${Math.floor(Math.random()*100)}`;

        let btn = document.createElement("button");
        btn.setAttribute("class","addbtn")
        btn.innerText = "Remove";
        
        btn.addEventListener("click",function(){
            
        })

        div.append(img,name,id,price,btn);
        document.querySelector("body").append(div)
    })
}
document.getElementById("btn3").addEventListener("click", function(){
    window.location.href= "payment.html";
})

// var total = cartItems.reduce(function(acc, cv){     // for add total  item price
//     console.log(cv);
//     return acc + Number(cv.price);
// }, 0);
// console.log('total:', total)

