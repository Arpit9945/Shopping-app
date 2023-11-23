import { useEffect, useState } from "react"


function CartList({ cart }) {


    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])



    return (
        <div>
            {
                CART?.map((cartItem, cartIndex) => {
                    return (
                        <div className="maincart">
                            <img src={cartItem.url} width={70} />
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity -1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button> &nbsp; &nbsp;
                            <span> {cartItem.quantity} </span> &nbsp; &nbsp;
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs.{cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p style={{textAlign: 'center'}}> Total : <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>

        </div>
    )
}

export default CartList
