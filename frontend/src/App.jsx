import React from "react"
import Register from "./modules/users/pages/Register";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App(){
  return(
    <>
    <Theme>
      <Register/>
    </Theme>
      
    </>
  )


}

export default App;
