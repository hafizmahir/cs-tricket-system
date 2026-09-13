1. What is JSX, and why is it used?

JSX is a syntax used in React that lets us write HTML-like code inside JavaScript. It makes React components easier to read and write.

2. Difference between State and Props

State is data managed inside a component and can change over time.
Props are data passed from a parent component to a child component. Props are read-only.
3. What is the useState Hook?

useState is a React Hook used to store and update data in a component. It returns the current value and a function to update it.

4. How can you share state between components?

State can be shared by moving it to their common parent component. The parent can then pass the state and update function to child components using props.
5. How is event handling done in React?

React handles events using event handlers such as onClick, onChange, and onSubmit. We pass a function to the event handler to perform an action.