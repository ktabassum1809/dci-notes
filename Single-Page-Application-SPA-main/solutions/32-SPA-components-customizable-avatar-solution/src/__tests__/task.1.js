import React from "react"
import { render } from '@testing-library/react'
import App from '../App'
import Avatar from '../components/Avatar.js'
import '@testing-library/jest-dom/extend-expect'
import fs from 'fs';
import path from 'path';

let css;
beforeAll(() => {
    css = fs.readFileSync(path.resolve('node_modules/bootstrap/dist/css/bootstrap.min.css'), 'utf-8')
})

const addCSS = () => {
    document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`)
}

describe('App', () => {
    it('App renders without crashing', () => {
        render(<App />)
    })
})

describe('Avatar Component', () => {
    it('`Avatar` Component found`', () => {
        expect(typeof Avatar).toBeTruthy()
    })
    it('`Avatar` renders an image`', () => {
        render(<Avatar />)
        expect(document.querySelector('img')).toBeTruthy()
    })
})

describe('Default configuration', () => {
    it('The square Avatar image has no border radius', () => {
        render(<Avatar type="square" />)
        addCSS()
        const style = getComputedStyle(document.querySelector('img')).borderBottomLeftRadius
        const zero = style ? style === "0px" : true;
        expect(zero).toBeTruthy()
    })
})

describe('Type: Circle', () => {
    it('When component is passed props `<Avatar src="..." type="circle" />`, rhe Avatar is round', () => {
        render(<Avatar type="circle" />)
        const borderRadii = [...document.querySelectorAll('*')].map(el => parseInt(getComputedStyle(el).borderRadius.split(' ')[0]))
        expect(borderRadii.some(r => r > 15)).toBeTruthy()
    })
})
