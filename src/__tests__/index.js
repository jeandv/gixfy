import {  render } from '@testing-library/react';
import App from '../App';

// test('home work as expected', async () => {
//     const { findByRole } = render(<App />)
//     const gifLink = await findByRole('button');

//     expect(gifLink).toBeVisible()
// });

test('se pueden buscar gifs', async () => {
    const { findByRole } = render(<App />)

    const input = await findByRole('textbox')
    // const button = await findByRole('button')

    // fireEvent.change(input, { target: { value: 'Matrix' } })
    // fireEvent.click(button)

    // const title = await findByText('Matrix')
    expect(input).toBeVisible()
});