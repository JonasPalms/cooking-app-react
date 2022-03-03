import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg'

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    max-width: 1200px; 
    margin: 20px auto; 
`;

const Buttons = styled.div`
    div { 
        display: inline-block; 
        width: 20px; 
        height: 20px; 
        cursor: pointer; 
        margin-left: 20px; 
        border-radius: 50%; 
        
        border: 2px solid white; 

    }
`;

const ModeToggle = styled.div`
    margin-right: auto; 
    
    img {
        width: 24px;
        height: 24px; 
        cursor: pointer;
    }


`;

const themeColors = ['#58249C', '#249C6B', '#B70233', '#0058B9'];



export default function ThemeSelector() {

    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    console.log(mode)

    return (
        <Container>
            <ModeToggle>
                <img
                    onClick={toggleMode}
                    src={modeIcon}
                    alt='mode change button'
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </ModeToggle>
            <Buttons>
                {themeColors.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))
                }
            </Buttons>
        </Container>
    )
}