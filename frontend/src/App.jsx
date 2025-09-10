import React from "react"
import Register from "./modules/users/pages/Register";
import "@radix-ui/themes/styles.css";
import { Button,Flex, Theme } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "./shared/routes/App-route";

function App(){
  const navigate = useNavigate();
  return(
    <>
   <Theme>
     <Flex align="center" gap="3">
	   <Button variant="classic" onClick={()=>navigate('/register')} >Register</Button>
     <Button variant="solid" onClick={()=>navigate('/login')}>Login</Button>
</Flex>
      <AppRoutes />

</Theme>

      
    </>
  )


}

export default App;
