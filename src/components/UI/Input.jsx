

export default function Input({label,id,...props}){
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input type="text" required id={id} name={id} {...props}/>
        </p>
    );
}