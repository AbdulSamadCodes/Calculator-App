import React from 'react';
import { useLayoutEffect } from 'react';

function moveSlideBall(themePallete, currentTheme, ballRef) {
  const setBallPosition = () => {
    const themeBall = ballRef?.current;
    const OFFSET = 5;

    const themes = Object.keys(themePallete);
    const themeIndex = themes.findIndex(theme => theme === currentTheme);

    const position = themeBall.parentElement.previousElementSibling
      .children[themeIndex].offsetLeft;

    themeBall.style.left = `${position + OFFSET}px`;
  }

  useLayoutEffect(() => {
    setBallPosition();
  }, [currentTheme]);
}

export { moveSlideBall };