function Card(props) {

    const {quantity = 0} = props
    return <div className='cart green darken-4 white-text'>
        <i className="material-icons">card_travel</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
}

export {Card}