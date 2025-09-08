import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Page from '../src/app/page'

describe('Page', () => {
    it('renders the user\'s first and last name after they press "Save"', async () => {
        const page = render(<Page />)

        await new Promise(r => setTimeout(r, 1000))

        const firstnameField = page.getByLabelText('first-name')
        const lastnameField = page.getByLabelText('last-name')
        const saveButton = page.getByLabelText('save')
        
        const firstname = 'First'
        const lastname = 'Lasty'
        
        fireEvent.change(firstnameField, { target: { value: firstname } })
        fireEvent.change(lastnameField, { target: { value: lastname } })
        
        fireEvent.click(saveButton)
        
        await new Promise(r => setTimeout(r, 500))
        
        const output = page.getByLabelText('output').innerHTML
        expect(output).toBe(`<p>Hello, ${firstname} ${lastname}!</p>`)
    })
})