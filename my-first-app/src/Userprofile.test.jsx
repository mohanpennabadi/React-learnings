import {render, screen} from '@testing-library/react';
import UserProfile from './Userprofile.jsx';
import {describe, it, expect} from 'vitest';
describe('testing user profile component.',()=>{
    it('whether it renders perfectly or not',()=>{
        const name="mohan"
        const role="Trainee"
        const department="Engineering"
        render(<UserProfile name={name} role={role} department={department} />);
        const nameElement = screen.getByText(name);
        const roleElement = screen.getByText(`Role: ${role}`);
        const departmentElement = screen.getByText(`Department: ${department}`);
        expect(nameElement).toBeInTheDocument();
        expect(roleElement).toBeInTheDocument();
        expect(departmentElement).toBeInTheDocument();  
    
    })
})