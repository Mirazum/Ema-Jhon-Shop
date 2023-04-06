import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async()=>{
    const loaderProduct =await fetch('products.json');
    const products= await loaderProduct.json();
    const storedCart = getShoppingCart();
    const savedCart =[];
    for(const id in storedCart){
        const addedProduct = products.find(pd=>pd.id===id);
        const quantity = storedCart[id];
        addedProduct.quantity= quantity
        savedCart.push(addedProduct)
    }







    console.log(products)
    return savedCart

}

export default cartProductLoader;