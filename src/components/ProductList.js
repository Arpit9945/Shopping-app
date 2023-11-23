

function ProductList({ product, addToCart }) {
    return (
        <div className="flex">
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '23%' }} className="mainproduct">
                            <div className='product-item'>
                                <img src={productItem.url} style={{}} />
                                <div style={{ textAlign: 'center' }}>
                                    <p>{productItem.name} | {productItem.category}</p>
                                    <p>{productItem.seller}</p>
                                    <p>Rs. {productItem.price} /- </p>
                                    <button
                                        onClick={() => addToCart(productItem)}
                                    >Add To Cart</button>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;