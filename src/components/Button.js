
const Button = ({ color, text, padding, onToggle }) => {
    return (
        <div className="btn">
            <button onClick={onToggle} style={{
                backgroundColor: color,
                padding: padding,
                borderRadius:'3px',
                border:'none',
                outline: 'none',
                color:'#fff',
                cursor: 'pointer'
            }}>
                {text}
            </button>
        </div>
    );
}

export default Button;
