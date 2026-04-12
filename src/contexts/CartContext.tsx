/**
 * CartContext.tsx
 * 
 * PHASE 2 FEATURE - Not yet implemented
 * 
 * Specification: docs/API_DATA_SPECIFICATIONS.md#Section-1.2
 * Feature Spec: docs/FEATURE_SPECIFICATIONS.md#Section-8.1
 * 
 * This context will manage shopping cart state when e-commerce
 * features are activated in Phase 2.
 * 
 * Deferred implementation - placeholder only
 */

export const CartContext = null;
export const CartContextProvider = null;

//             setProducts(productsCopy);
//             setProductsLS(productsCopy);
//         } else {
//             /* Product isn't on the cart => creates a new product with cartAmount = amount and add new product to the products array. */
//             const newProduct = {
//                 ...product,
//                 cartAmount: amount
//             }
//             setProducts([...products, newProduct]);
//             /* Update cart in session storage. */
//             setProductsLS([...products, newProduct]);
//         }
//         /* Display a toast. */
//         onAddToast(product.name, amount);
//     }

//     /* This function adds 1 unit of a product. */
//     const quickAdd = (product: Product) => {
//         if (isInCart(product.id)) {
//             const prod = getProduct(product.id);
//             if (prod.stock - prod.cartAmount > 0) {
//                 const index = products.indexOf(prod);

//                 let productsCopy = [...products];
//                 productsCopy[index].cartAmount++;
//                 setProducts(productsCopy);
//                 setProductsLS(productsCopy);

//                 onAddToast(product.name, 1);
//             } else noStockToast(product.name);
//         } else {
//             if (product.stock > 0) {
//                 const newProduct = {
//                     ...product,
//                     cartAmount: 1
//                 }
//                 setProducts([...products, newProduct]);
//                 setProductsLS([...products, newProduct]);

//                 onAddToast(product.name, 1);
//             } else noStockToast(product.name);
//         }
//     }

//     /* This function increases a product amount by 1. */
//     const increaseProduct = (id: string) => {
//         let prod = getProduct(id);
//         let index = products.indexOf(prod);

//         let productsCopy = [...products];
//         productsCopy[index].cartAmount++;

//         setProducts(productsCopy);
//         setProductsLS(productsCopy);
//     }

//     /* This function removes a product from the cart. */
//     const removeProduct = (id: string) => {
//         const newProds = products.filter(product => product.id !== id);
//         setProducts(newProds);
//         setProductsLS(newProds);
//     } 

//     /* This function decreases a product amount by 1. */
//     const decreaseProduct = (id: string) => {
//         let prod = getProduct(id);
//         let index = products.indexOf(prod);

//         let productsCopy = [...products];
//         productsCopy[index].cartAmount--;

//         setProducts(productsCopy);
//         setProductsLS(productsCopy);
//     }

//     /* This function removes all products from the cart, leaving it empty. */
//     const clear = () => {
//         setProducts([]);
//         setProductsLS([]);
//     };

//     /* This function returns true if a product is in the cart. */
//     const isInCart = (id: string): boolean => products.some(product => product.id === id);

//     /* This function returns the product with id equal to "id". */
//     const getProduct = (id: string): Product => products.find(product => product.id === id) as Product;

//     /* This Function returns the amount of items in the cart */
//     const cartLength = (): number => products.reduce((acc, product) => acc += product.cartAmount, 0);

//     /* This function return the subtotal cost of the cart. */
//     const getSubtotal = (): number => products.reduce((acc, {cartAmount, price}) => acc += (cartAmount * price), 0);

//     /* This function returns the shippment cost. */
//     const shippingPrice = (): number => expressShipping ? 18.60 : 12.40;

//     /* This function returns the total cost of the cart. */
//     const getTotal = (): number => getSubtotal()*1.22 + shippingPrice();

//     /* This function updates the local storage. */
//     const setProductsLS = (products: Product[]) => localStorage.setItem('cart', JSON.stringify(products));

//     /* This function fetchs the cart from local storage. */
//     const getProductsLS = (): Product[] => JSON.parse(localStorage.getItem('cart') || '[]');

//     /* Every time the products state change set the cart
//     of the local storage equals to products. */
//     useEffect(() => setProducts(getProductsLS()), []);

//     return (
//         <CartContext.Provider 
//             value={{
//                 products, 
//                 expressShipping,
//                 cardPayment,
//                 setExpressShipping,
//                 setCardPayment,
//                 addProduct, 
//                 quickAdd,
//                 increaseProduct,
//                 removeProduct, 
//                 decreaseProduct,
//                 clear, 
//                 isInCart, 
//                 getProduct,
//                 cartLength,
//                 getSubtotal,
//                 getTotal
//             }}
//         >
//             { children }
//         </CartContext.Provider>
//     )
// }
export {}