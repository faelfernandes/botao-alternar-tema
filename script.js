const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]") // checkbox toogle

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style) // pega o style do css

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
}

const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  colorHeadings: "#3664FF",
  colorText: "#B5B5B5"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase() // expressão regular

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener("change", ({ target }) => { // função alternar as cores
  target.checked ? changeColors(darkMode) : changeColors(initialColors) // if ternário
})