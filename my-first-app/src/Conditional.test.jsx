import {render,screen,fireEvent} from "@testing-library/react";
import {describe,it,expect} from 'vitest';
import Conditional from "./Conditional";
describe("checking conditional rendering",()=>{
    it("renders perfectly or not",()=>{
        render(<Conditional username="mohan" connection={true}/>)
        const name=screen.getByText(/mohan/i)
        expect(name).toBeInTheDocument()
        const button=screen.getByRole("button")
        expect(button).toBeInTheDocument()
        const para=screen.getByText(/welcome to website/i)
        expect(para).toBeInTheDocument()
        fireEvent.click(button)
        const para1=screen.getByText(/Offline/i)
        expect(para1).toBeInTheDocument()
    })
})