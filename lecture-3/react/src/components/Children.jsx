import PropTypes from 'prop-types';

function Card({children}) {
    return <div className="card">{children}</div>;
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export function Children() {
    return (
        <div>
            <Card>
                <h1>Title</h1>
                <p>This is a card with a title and a paragraph.</p>
            </Card>

            <Card>
                <button>Click Me</button>
            </Card>
        </div>
    );
}
