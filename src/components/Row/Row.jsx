import Posters from '../Posters/Posters';
import './row.css';

export const Row = ({ title, posters }) => {
    return (
        <div>
            <div className="row">
                <h2>{title}</h2>
                <Posters posters={posters} />
            </div>
        </div>
    )
}
