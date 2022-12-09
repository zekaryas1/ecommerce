import MiniProduct from "./Products/MiniProduct";

function Cart() {
    return (<>
        <h1 className="text-4xl mb-3">Shopping cart</h1>
        <MiniProduct/>
        <MiniProduct/>
        <MiniProduct/>
        <MiniProduct/>
        <MiniProduct/>
        <MiniProduct/>
    </>)
}

export default Cart;