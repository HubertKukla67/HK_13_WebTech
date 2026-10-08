export default function Product({name, price, onSelect})
{


    return(
        <button onClick={() => onSelect(name, price)}>
            console
        </button>
    );
}
