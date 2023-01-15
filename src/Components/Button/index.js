import { Buttonstyle } from "./style";


function Button ({label, onClick}) {
    return (
        <Buttonstyle onClick={onClick}>
            {label}
        </Buttonstyle>
    );
}

export default Button;
