import { InputStyle } from "./style";

const Input = ({value}) => {
    return (
        <InputStyle>
            <input disabled value={value}/>
        </InputStyle>
    );
}

export default Input;
