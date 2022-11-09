import styled from "styled-components";

const StyledThemeSwitch = styled.div`
    width: 50px;
    height: 26px;
    background-color: #333333;
    border-radius: 25% / 50%;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
`;

const StyledDiv = styled.div<{ isVisible: boolean }>`
    width: 24px;
    height: 24px;
    background-color: ${ (props) => props.isVisible ? "inherit" : "#FAFAFA" };
    border-radius: 50%;
    span {
        visibility: ${ (props) => props.isVisible ? "visible": "hidden" };
    }
`;

export default function ThemeSwitch({ isLight, toggleMode }: { isLight: boolean, toggleMode: (isLight: boolean) => void }) {

    return (
        <StyledThemeSwitch onClick={() => toggleMode(!isLight)}>
            <StyledDiv isVisible={!isLight} >
                <span>🌙</span>
            </StyledDiv>
            <StyledDiv isVisible={isLight}>
                <span>☀️</span>
            </StyledDiv>
        </StyledThemeSwitch>
    );
}