import {act} from '@testing-library/react'
describe('Start Page', () => {
    test('The inital route is "/dogs"', () => {
        //Wait for rendering home page 
        act(() => {
            document.body.innerHTML = '<div id="root"></div>';
            require('../../src/index');
        });
        // expect hom page path name 
        expect(window.location.pathname.toLocaleLowerCase()).toEqual('/dogs');
    })
    test('Three dogs are shown on the page, using the images from `src/images/`', () => {
        // expect only three images is there
        expect(document.body.querySelectorAll("img")).toHaveLength(3);
        // All three images is same in image folder
        const images = document.body.querySelectorAll("img")
        images.forEach(e => {
            expect(['whiskey.jpg','hazel.jpg','tubby.jpg']).toContain(e.getAttributeNode('src').value)
        });
    })
})