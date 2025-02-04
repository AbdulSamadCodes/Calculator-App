import React from 'react';
import { useRef } from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useThemeContext();
  const themeBallRef = useRef(null);
  
  const themes = Object.keys(themePallete);
  const totalThemes = themes.length;

  const slideThemeBall = (themeIndex) => {
    const themeBall = themeBallRef?.current;
    const OFFSET = 5;

    const position = themeBall.parentElement.previousElementSibling
      .children[themeIndex].offsetLeft;

    themeBall.style.left = `${position + OFFSET}px`;
  }

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const themeIndex = themes.findIndex(theme => theme === prevTheme);
      const nextThemeIndex = (themeIndex + 1) % totalThemes;

      slideThemeBall(nextThemeIndex);

      return themes[nextThemeIndex];
    });
  };

  return (
    <div className='flex flex-col gap-y-1'>

      <div className='flex self-center
       items-center gap-x-4  text-white 
       text-[0.7rem] font-bold relative'>

        <span>1</span>
        <span>2</span>
        <span>3</span>

      </div>

      <div className={`theme-selector ${currentTheme} relative
       w-[4rem] py-[0.7rem] rounded-xl`}
        style={{ backgroundColor: themePallete[currentTheme]['bg-toggler'] }}
      >

        <span className='theme-ball absolute
         w-[20%] aspect-square top-[50%] left-[0.2rem]
         translate-y-[-50%]  rounded-full'
          style={{ backgroundColor: themePallete[currentTheme]['bg-theme_ball'] }}

          ref={themeBallRef}
          onClick={toggleTheme}
        >
        </span>

      </div>

    </div>
  );
}

export { ThemeSelector };