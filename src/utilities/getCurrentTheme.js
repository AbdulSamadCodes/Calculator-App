
function getCurrentTheme(themePallete , currentTheme) {
  const themes = Object.keys(themePallete);
  const totalThemes = themes.length;

  const themeIndex = themes.findIndex(theme => theme === currentTheme);

  return  themes[(themeIndex + 1) % totalThemes];
}

export { getCurrentTheme };