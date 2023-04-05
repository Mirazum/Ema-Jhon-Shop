const cartProductLoader = async()=>{
    const loaderProduct =await fetch('products.json');
    const products= await loaderProduct.json();
    console.log(products)
    return products

}

export default cartProductLoader;