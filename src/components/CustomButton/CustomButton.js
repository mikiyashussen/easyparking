import Button from "react-bootstrap/Button";

const CustomButton = ({buttonText}) => {
    return (
        <div>
            <Button style={{width: '100%', borderRadius: '8px'}} variant="primary">{buttonText}</Button>{' '}
        </div>
    )
}

export default CustomButton;
