import React from 'react';
import { useRef } from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';
import { getCurrentTheme } from '/src/utilities/getCurrentTheme.js';
import { moveSlideBall } from '/src/utilities/moveThemeBall.js';

function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useThemeContext();
  const themeBallRef = useRef(null);

  const selectedTheme = getCurrentTheme(themePallete, currentTheme);

  const toggleTheme = () => {
    setCurrentTheme(selectedTheme);
  };

  moveSlideBall(themePallete, currentTheme, themeBallRef);

  return (
    <div className='flex flex-col gap-y-1'>

      <div className='flex self-center
       items-center gap-x-4  text-white 
       text-[0.7rem] font-bold relative'
       
        style={{ color: themePallete[currentTheme]['text-primary'] }}
      >

        <span>1</span>
        <span>2</span>
        <span>3</span>

      </div>

      <div className={`theme-selector ${currentTheme} relative
       w-[4rem] py-[0.7rem] rounded-xl`}
        style={{ backgroundColor: themePallete[currentTheme]['bg-primary'] }}
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