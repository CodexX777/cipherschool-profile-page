import { createContext } from "react";

export const sideBarContext = createContext({
    sideBarToggle:()=>{},
    sideBarOpen:false,
});
