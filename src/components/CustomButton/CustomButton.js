import Button from "react-bootstrap/Button";

const CustomButton = ({buttonText,onBtnClick}) => {
    // const btnClick = () => {
    //     onBtnClick()
    //     console.log('clicked')
    // }
    return (
        <div>
            <Button  style={{width: '100%', borderRadius: '8px'}} 
            onClick={onBtnClick}
            variant="primary">{buttonText}</Button>{' '}
        </div>
    )
}

export default CustomButton;
