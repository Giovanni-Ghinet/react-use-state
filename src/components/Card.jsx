import { useState } from 'react';

function Card({
    buttonTitle = 'titolo default',
    buttonContent = 'Descrizione Default'
}) {

    const [open, setOpen] = useState(false);

    let btnClass = '';

    if (open){
        btnClass = 'btn-warning';
    } else{
        btnClass = 'btn-primary';
    }

    let contenuto = '';

    if (open) {
        contenuto = buttonContent;
    }
    
    const clickHandler = (event) => {
        setOpen(!open)
    }
    return (
        <div className="card">
            <div className="card-body">
                <button onClick={clickHandler} className={`btn ${btnClass} `}>{buttonTitle}</button>
                <p>
                    {contenuto}
                </p>
            </div>
        </div>
    )
}
export default Card;