import { render, screen ,cleanup} from '@testing-library/react';
import { describe, it, expect, vi, beforeEach,afterEach } from 'vitest';
import Fetch from './Fetch';

describe('Fetch Component Integration Tests', () => {
 beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });
  it('fetches users from API and renders their names on the screen', async () => {
    const mockData = {
      users: [
        { id: 1, firstName: 'Terry', lastName: 'Medhurst' },
        { id: 2, firstName: 'Sheldon', lastName: 'Quigley' }
      ]
    };

    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: async () => mockData
    });

    render(<Fetch />);
    const user1 = await screen.findByText('Terry Medhurst');
    const user2 = await screen.findByText('Sheldon Quigley');

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
  });

  it('renders heading and zero list items when no users are returned', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: async () => ({ users: [] })
    });

    render(<Fetch />);

    const heading = await screen.findByRole('heading', { name: /user list/i });
    expect(heading).toBeInTheDocument();

    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });
});