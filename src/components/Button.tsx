type ButtonProps = {
    handleClick: ()=> void
}

const Button = ({handleClick} : ButtonProps) => {
    return (
        <button onClick={handleClick}>Click Me!</button>
    );
};

export default Button;