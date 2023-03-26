import LoadingWheel from "../../assets/loading-wheel.gif";

import "./styles.scss";

export const Loading = () => {
  return (
    <div className="loading-container">
      <img src={LoadingWheel} alt="Cargando resultados" />
    </div>
  );
};
