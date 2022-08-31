import { render } from '@testing-library/react';
import App from './App';

test('la ruta default renderiza sin errores', async () => {
  const { findByText } = render(<App />)
  const title = await findByText(/Tu última búsqueda/i)
  expect(title).toBeInTheDocument()
})