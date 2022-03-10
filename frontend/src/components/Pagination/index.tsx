import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./styles.css"
function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> b6635d9a8fcba852e15d00d2f180a6efbf59a5fd
export default Pagination;