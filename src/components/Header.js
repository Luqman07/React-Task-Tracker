
import Button from './Button';

const Hearder = ({ title, onToggle, show }) => {
   
   
    return (
        <div className="header">
            <h2>{title}</h2>
            <>
                <Button onToggle={onToggle} color={show ? '#d62246':'green'} text={show ? 'Close':'Add'} padding=".5rem  .8rem" />
            </>
        </div>

    );
}

export default Hearder;