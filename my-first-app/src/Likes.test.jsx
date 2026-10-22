import {render,screen,fireEvent} from '@testing-library/react';
import {describe,it,expect} from 'vitest';
import LikeButton from './Likes';

describe("check whether like functionality working properly or not",()=>{
    it("writing testcase for it",()=>{
        const count=5
        render(
            <LikeButton initialLikes={count}
            />)
        const nooflikes=screen.getByText(`Likes: ${count}`)
        expect(nooflikes).toBeInTheDocument()
        const b=screen.getByRole("button")
        fireEvent.click(b)
        const co=screen.getByText(`Likes: ${count+1}`)
        expect(co).toBeInTheDocument()
    })
})