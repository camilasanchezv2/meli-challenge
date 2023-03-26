import EmptyStateIcon from "../../assets/empty-state.svg";

import "./styles.scss";

export const EmptyState = () => {
  return (
    <div className="empty-state">
      <img src={EmptyStateIcon} alt="" className="icon" />
      <div className="suggestion">
        <p className="description">
          No hay publicaciones que coincidan con tu búsqueda.
        </p>
        <ul>
          <li>
            <strong>Revisa la ortografía</strong> de la palabra.
          </li>
          <li>
            Utiliza <strong>palabras más genéricas</strong> o menos palabras.
          </li>
        </ul>
      </div>
    </div>
  );
};
