export default function Tabs({children,buttons,buttonsContainer = 'menu'}){
    const ButtonsContainer = buttonsContainer;  // if i have not used it then the react will recognised it as builtin component
    return(
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
