import {useState, useRef, useEffect, useLayoutEffect} from 'react';

export function UseLayoutEffect() {
    const [width, setWidth] = useState(0);
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        // Measure the width of the box element after it renders
        if (boxRef.current) {
            setWidth(boxRef.current.offsetWidth);
        }
    }, []); // Dependency array is empty, so this runs only on the initial render

    useEffect(() => {
        console.log('Width changed:', width);
    }, [width]);

    return (
        <div>
            <div
                ref={boxRef}
                style={{
                    width: '50%',
                    height: '100px',
                    backgroundColor: 'lightcoral',
                    margin: '20px 0',
                }}
            >
                Resize me!
            </div>
            <p>Box width: {width}px</p>
        </div>
    );
}
