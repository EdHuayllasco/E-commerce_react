
export const Counter = ({quantity, setQuantity}) => {

  

    return (
        <div className="d-flex align-items-center justify-content-start counter">
            <button
                className="counter-btn"
                onClick={() => setQuantity(
                    prevStatus => prevStatus == 1 
                        ? 1
                        : prevStatus - 1)}
                >
                -
            </button>
                <span>{quantity}</span> 
            <button
                className="counter-btn"
                onClick={() => setQuantity(quantity + 1)}
                >
                +
            </button>

        </div>
    )
}
