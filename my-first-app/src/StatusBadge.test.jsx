import {render, screen,fireEvent} from '@testing-library/react';
import { describe,it,expect} from 'vitest';
import StatusBadge from './StatusBadge.jsx';

describe("testing the toggle status",()=>{
    it("whether the status changing correctly or not",()=>{
        const s="Online"
        render(<StatusBadge/>)
        const status=screen.getByText("Toggle Status")
        expect(status).toBeInTheDocument()
        fireEvent.click(status)
        expect(screen.getByText(`Status: ${s}`)).toBeInTheDocument()
    })
})