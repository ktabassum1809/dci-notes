import {act} from '@testing-library/react'
describe('Dog Details', () => {
    test('App navigates to correct route when a dog is clicked', () => {
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
            //expect routs contains "/dogs/image name" 
            expect('/dogs/'+e.getAttributeNode('src').value.toLocaleLowerCase()).toContain(window.location.pathname.toLocaleLowerCase())
        });
    })
    
})