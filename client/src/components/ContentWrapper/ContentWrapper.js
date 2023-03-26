import "./styles.scss";

export const ContentWrapper = ({ children, breadcrumb = [] }) => {
  return (
    <div className="content-wrapper">
      {breadcrumb.length > 0 && (
        <div className="breadcrumb">
          {breadcrumb.map(({ name, id }) => (
            <p key={id} className="category">
              {name}
            </p>
          ))}
        </div>
      )}
      <div className="container">{children}</div>
    </div>
  );
};
