import {render, screen ,fireEvent} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import Counter from './Usestate.jsx';
describe('testing counter component',()=>{
    it('whether it should be incremented or not',()=>{
        render(<Counter/>);
        const ele=screen.getByRole('button');
        console.log(ele);
        expect(ele).toBeInTheDocument();
        expect(ele).toHaveTextContent('USE STATE HOOK');
        expect(screen.queryByText('You hover 0 times')).toBeInTheDocument();
        fireEvent.mouseOver(ele);
        expect(screen.queryByText('You hover 1 times')).toBeInTheDocument();
         fireEvent.mouseOver(ele);
        expect(screen.queryByText('You hover 2 times')).toBeInTheDocument();
         fireEvent.mouseOver(ele);
        expect(screen.queryByText('You hover 3 times')).toBeInTheDocument();
    })
})