import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config"; // Fix the path

const fullConfig = resolveConfig(tailwindConfig);
// https://stackoverflow.com/questions/59982018/how-do-i-get-tailwinds-active-breakpoint-in-javascript
export function useBreakpoint(breakpointKey) {
  const breakpoints = fullConfig.theme.screens;
  console.log(breakpoints);
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  return {
    [`is${capitalizedKey}`]: bool,
  };
}
