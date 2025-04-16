const heading = React.createElement(
    'div',
    { id: 'parent', class: 'parent' },
    React.createElement('div', { id: 'child', class: 'child' }, [
        React.createElement(
            'h1',
            { id: 'heading', class: 'heading' },
            'Hello world React',
        ),
        React.createElement(
            'h2',
            { id: 'heading2', class: 'heading2' },
            'Hello world React 2',
        ),
    ]),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
