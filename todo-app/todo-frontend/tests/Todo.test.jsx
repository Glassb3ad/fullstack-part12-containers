import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../src/Todos/Todo';

test('Check that todo text and actions are rendered', () => {
  const testMessage = 'Test Message';
  render(<Todo text={testMessage} actions={<button>hello</button>} />);
  expect(screen.queryByText(testMessage)).toBeInTheDocument();
  expect(screen.queryByText('hello')).toBeInTheDocument();
});
