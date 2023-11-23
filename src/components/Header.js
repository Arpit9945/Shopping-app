import '../App.css';

function Header(props) {
    return (
        <div className='nav shopping-cart'>
            <div onClick={() => props.handleShow(false)}>Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}>Cart
                <sup
                style={{ visibility: props.count === 0 ? 'hidden' : 'visible' }}
                >{props.count}</sup>
            </div>
        </div>
    );
}

export default Header;
