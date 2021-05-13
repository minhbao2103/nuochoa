function hinhanh (image, name,name1, price,) {
    document.getElementById("main-content").innerHTML +=`
    <div class="product">
    <a href=""><img src="` + image + `"></a>
    <h4>` + name + `</h4>
    <h4>` + name1 + `</h4>
   <p>` + price + `</p>
    </div>
    `
}

let hinh=["./hinhanh/images3.jpg","./hinhanh/images6.jpg","./hinhanh/images4.jpg","./hinhanh/images1.jpg","./hinhanh/images2.jpg"];
let sanpham=["MAIN","RENAISSANCE","MIDNIGHT FLOWER","SECRET GARDEN","LIBRARY"]
let sanpham1=["COLLECTION","COLLECTION","COLLECTION","COLLECTION","COLLECTION"]
let giatien=["GO TO COLLECTION","GO TO COLECTION","GO TO COLECTION","GO TO COLECTION","GO TO COLECTION"]


for (let i=0; i<5; i=i+1 ) {
    hinhanh(hinh[i], sanpham[i],sanpham1[i], giatien[i] )
}



function hinhanhs (images, names, prices,) {
    document.getElementById("container-product").innerHTML +=`
    <div class="product-1">
    <a href=""><img src="` + images + `"></a>
    <h4>` + names + `</h4>
    <p>` + prices + `</p>
    </div>
    `
}

let hinhs=["./hinhanh/product1.png","./hinhanh/product2.png","./hinhanh/product3.png","./hinhanh/product4.png","./hinhanh/product5.png","./hinhanh/product6.png","./hinhanh/product7.png","./hinhanh/product8.png"];
let sanphams=["DIA WOMAN","HONOUR WOMAN","REFLECTION MAN","INTERLUDE MAN","JUBILATION XXV","SUNSHINE MAN","BEACH HUT MAN","BLOSSOM LOVE"]
let giatiens=["$250.00-350.00","$250.00-350.00","$250.00-350.00","$250.00-350.00","$250.00-340.00","$340.00","$350.00","$250.00-370.00"]


for (let i=0; i<8; i=i+1 ) {
    hinhanhs(hinhs[i], sanphams[i], giatiens[i] )
}

