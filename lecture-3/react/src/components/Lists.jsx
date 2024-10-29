export function Lists() {
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={`item-${index.toString()}`}>{item}</li>
            ))}
        </ul>
    );
}
