const hexToRgbVars = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)

    return { r, g, b }
  }
  // if error return hex color
  return hex
}

const hexToRgb = (hex: string) => {
  const rgb = hexToRgbVars(hex)
  if (typeof rgb !== 'string')

    return `${rgb.r}, ${rgb.g}, ${rgb.b}`

  // if error return hex color
  return rgb
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

function brighten(col: string, amt: number) {
  if (amt > 0 || amt < 0) {
    col = col.replace(/^#/, '')
    if (col.length === 3)
      col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

    const rgb = hexToRgbVars(col)
    if (typeof rgb !== 'string') {
      const r = Math.max(Math.min(255, rgb.r - Math.round(255 * -(amt / 100))), 0).toString(16)
      const g = Math.max(Math.min(255, rgb.g - Math.round(255 * -(amt / 100))), 0).toString(16)
      const b = Math.max(Math.min(255, rgb.b - Math.round(255 * -(amt / 100))), 0).toString(16)

      const rr = (r.length < 2 ? '0' : '') + r
      const gg = (g.length < 2 ? '0' : '') + g
      const bb = (b.length < 2 ? '0' : '') + b

      return `#${rr}${gg}${bb}`
    }
  }

  return col
}

const luminance = (rgb: { [key: string]: number }) => {
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255
    return v <= 0.03928
      ? v / 12.92
      : ((v + 0.055) / 1.055) ** 2.4
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

//
function mostReadable(bgColor: string) {
  const bgRgb = hexToRgbVars(bgColor)
  let textColor = ''
  if (typeof bgRgb !== 'string') {
    const bgLum = luminance(bgRgb)

    for (let i = 1; i < 15; i++) {
      const readable = brighten(bgColor, (bgLum < 0.3 ? (i * 10) : -(i * 10)))
      const readableRgb = hexToRgbVars(readable)
      if (typeof readableRgb !== 'string') {
        const readableLum = luminance(readableRgb)
        const ratio = bgLum > readableLum ? ((readableLum + 0.05) / (bgLum + 0.05)) : ((bgLum + 0.05) / (readableLum + 0.05))
        if (ratio < 1 / 4.5) {
          textColor = readable
          break
        }
      }
    }
  }
  return textColor
}

export { hexToRgb, varToRgba, mostReadable, brighten }
