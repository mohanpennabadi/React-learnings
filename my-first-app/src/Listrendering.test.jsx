import {render,screen,fireEvent} from '@testing-library/react';
import {describe,it,expect} from 'vitest';
import List  from './Listrendering';

describe("checking the list rendered properly or not",()=>{
    it("testing the rendered list",()=>{
    render(<List />)
    const len=screen.getAllByRole("listitem").length    
    expect(len).toBe(3)
    })
})