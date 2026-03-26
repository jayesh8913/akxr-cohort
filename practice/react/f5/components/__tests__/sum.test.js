import { sum } from "../sum";

test("testing sum of 2 nums",()=>{
    const result = sum(3,5);

    //assertion
    expect(result).toBe(8)

})// test is a fn which takes 2 inputs 