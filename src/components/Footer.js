import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const onClick = ()=>{
        setIsDark(!isDark);
    }
    return (
        <div className={isDark? 'footer dark' : 'footer'}>
            <button onClick={onClick}>다크모드</button>
        </div>
    );
};

export default Footer;