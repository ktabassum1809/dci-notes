import {act} from '@testing-library/react'
describe('Dog pages content', () => {
    test('Each dog page has info and image of the dog', () => {
        //Wait for rendering home page 
        act(() => {
            document.body.innerHTML = '<div id="root"></div>';
            require('../../src/index');
        });
        // Find dogs images and click in it
        const images = document.body.querySelectorAll("img")
        expect(images).not.toHaveLength(0);
        images.forEach(e => {
            e.dispatchEvent(new MouseEvent("click", {bubbles: true}))
            //expect Extra image " 
            expect(document.body.querySelectorAll("img")).toHaveLength(3);
            // expect The content
            expect(document.body.textContent.toLowerCase()).toContain('dog')
        });
    })
    test('The content is below the list of dogs', () => {
        const childNodes = document.getElementById('root').firstChild.childNodes;
        expect(childNodes[0].textContent.toLowerCase()).toContain('hello');
        expect(childNodes[1].querySelectorAll("img")[0].parentNode).toBeTruthy();
        //expect(childNodes[1].textContent.toLowerCase()).toContain('age');
    })
   
})