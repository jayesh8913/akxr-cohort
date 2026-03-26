import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";



describe("overall tests to be ran ",()=>{
test("to see if contact us renders or not",()=>{ // we can also write it instead of test

    render(<Contact/>);
   const heading =screen.getByRole("heading");

   expect(heading).toBeInTheDocument();
});


test("to see if contact us input points numerical values or not",()=>{
 // steps for testing will be 1.render , 2.query, 3.expect
    render(<Contact/>); // render runs the components
   const input =screen.getAllByRole("textbox"); // screen search through the whole render

   expect(input.length).toBe(2);
}) 
})