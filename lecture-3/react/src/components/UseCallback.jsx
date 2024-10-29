import {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

function Item({item, onDelete}) {
    console.log(`Rendering item: ${item}`);
    return (
        <div>
            <span>{item}</span>
            <button onClick={() => onDelete(item)}>Delete</button>
        </div>
    );
}
Item.propTypes = {
    item: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export function UseCallback() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

    // Memoize the delete function to prevent re-creation on each render
    const handleDelete = useCallback(itemToDelete => {
        setItems(prevItems => prevItems.filter(item => item !== itemToDelete));
    }, []); // No dependencies, so it's created only once

    return (
        <div>
            <h1>My Item List</h1>
            {items.map(item => (
                <Item key={item} item={item} onDelete={handleDelete} />
            ))}
        </div>
    );
}
