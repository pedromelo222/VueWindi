export interface opacityValue {
  opacityVariable: string;
  opacityValue: string;
}

const varToRgba =
  (colorValue: string) =>
  ({ opacityVariable, opacityValue }: opacityValue) => {
    if (opacityValue !== undefined) 
      return `rgba(var(${colorValue}), ${opacityValue})`;
    
    if (opacityVariable !== undefined) 
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`;    

    return `rgb(var(${colorValue}))`;
  };
export { varToRgba };
