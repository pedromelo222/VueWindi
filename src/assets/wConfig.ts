import colors from "windicss/colors";
import plugin from "windicss/plugin";
import base from "../styles/base";
import configColors from "../styles/config";
import utilities from "../styles/utilities";
import { getTheme } from "./generateTheme";

const vueWindi = plugin(
  ({ addUtilities, addBase }) => {
    addBase(base);
    addBase(getTheme());
    addUtilities(utilities);
  },{
    theme: {
      extend: {
        colors: theme =>  ({
          ...configColors
        })
      }
    }
  });
  

export default vueWindi;
