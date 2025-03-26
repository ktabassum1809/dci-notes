import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-dom'
import {act} from '@testing-library/react'

import App from "../../src/components/App"

describe('Redirect', () =>{
    test('Non-existent routes redirect to Home page', () =>{
        act(() => {
        const root = document.createElement('div')
        document.body.appendChild(root)
        //Rout '/Unknown' Path
        render(<MemoryRouter initialEntries={['/Unknown']} >
            <App />
        </MemoryRouter>,root)
        });
        // Only on Home page there is 3 images
      expect(document.body.querySelectorAll("img")).toHaveLength(3);
    })
}) 