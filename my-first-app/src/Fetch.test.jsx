import {render,screen,fireEvent} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import {describe,it,expect,vi,beforeEach,afterEach} from 'vitest';
import Fetch from './Fetch.jsx';

describe("all the tests to be done to check whether api works properly or not",()=>{
    beforeEach(()=>{
        vi.resetAllMocks();
    })
    it("test 1",async ()=>{
    const mockData = {
      users: [
         { id: 1, firstName: 'Terry', lastName: 'Medhurst' },
         { id: 2, firstName: 'Sheldon', lastName: 'Quigley' }       ]
    };
      vi.spyOn(global, 'fetch').mockResolvedValue({
     json: async () => mockData
    });
    render(<Fetch/>)
    const ele1=await screen.findByText(/Terry/i)
    const ele2=await screen.findByText(/Sheldon/i)
    expect(ele1).toBeInTheDocument();
    expect(ele2).toBeInTheDocument();
    })
    
})