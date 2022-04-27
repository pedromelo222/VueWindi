export interface opacityValue {
  opacityVariable: string;
  opacityValue: string;
}

const varToRgba =
  (colorValue: string) =>
  ({ opacityVariable, opacityValue }: opacityValue) => {
    if (opacityValue !== undefined) {
      console.log(`rgba(var(${colorValue}), ${opacityValue})`);
      return `rgba(var(${colorValue}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      console.log(`rgba(var(${colorValue}), var(${opacityVariable}, 1))`);
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`;
    }
    console.log(`rgb(var(${colorValue}))`);
    return `rgb(var(${colorValue}))`;
  };
export { varToRgba };
