import React from 'react'
import {
  Box,
  Heading,
  Text,
  TextField,
  Flex,
  Button
} from "@radix-ui/themes";
import { useRegister } from '../hooks/register-hook';

const Register = () => {
  const {
    doSubmit,
    register,
    handleSubmit,
    errors
    
  }=  useRegister();
  return (
    <>
      <Box style={{ width: "400px", margin: "24px auto" }}>
        <Heading align="center">Register</Heading>
      
      <form onSubmit={handleSubmit(doSubmit)}>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Name</Text>
          <TextField.Root {...register("name")} type="name" placeholder="Enter your name" />
           {errors.name && <Text color='red'>{errors.name.message}</Text>}
        </Box>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Email</Text>
          <TextField.Root {...register("email")}  type="email" placeholder="Enter your email" />
           {errors.email && <Text color='red'>{errors.email.message}</Text>} 
        </Box>
       
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Password</Text>
          <TextField.Root {...register("password")} type="password" placeholder="Enter your password" />
           {errors.password && <Text color='red'>{errors.password.message}</Text>}
        </Box>
        <Flex align="center" gap="3" >
	      <Button variant="solid" type='submit'>Register</Button>
	     <Button variant="soft">Reset</Button>
         </Flex>
        
      </form>
      </Box>
    </>
  )
}

export default Register;

