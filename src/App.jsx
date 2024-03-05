import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "services/queryClient";
import { ChakraProvider, theme } from "@chakra-ui/react";

function App() {

  // const [file, setFile] = useState()

  // useEffect(() => {
  //   fetch("https://lms-vuny.onrender.com/lms/api/v1/excel/courses")
  //       .then((res) => {
  //         return res.blob()
  //       })
  //       .then((data) => setFile(data))
  // }, [])
  // console.log(file)
  return <ChakraProvider theme={theme}>
    {/* <a href={file} download={"courses.xlsx"}>OOOOO</a> */}
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </ChakraProvider>; 
}

export default App;
