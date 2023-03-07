import './card.css';
const Card = (props) => {
    const { title, desc } = props;
    return (
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="card-head">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-desc">
                        <p>{desc}</p>
                    </div>
                    <div className="card-footer">
                        <p>All rights reservr by &copy; Zahurul islam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
