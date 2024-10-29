import {useState} from 'react';

export function ListKeys() {
    const [items, setItems] = useState([
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
    ]);

    // Add a new item to the list
    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Fruit ${items.length + 1}`,
        };
        setItems([...items, newItem]);
    };

    // Remove an item from the list
    const removeItem = id => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeItem(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}
