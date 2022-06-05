const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)

    return `${r}, ${g}, ${b}`
  }
  // if error return hex color
  return hex
}

export interface opacityValue {
  opacityVariable: string
  opacityValue: string
}

const varToRgba
= (colorValue: string) =>
  ({ opacityVariable, opacityValue }: opacityValue) => {
    if (opacityValue !== undefined)
      return `rgba(var(${colorValue}), ${opacityValue})`

    if (opacityVariable !== undefined)
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`

    return `rgb(var(${colorValue}))`
  }

export { hexToRgb, varToRgba }
