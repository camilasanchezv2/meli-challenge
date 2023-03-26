import "./styles.scss";

export const ContentWrapper = ({ children, breadcrumb = [] }) => {
  return (
    <div className="content-wrapper">
      {breadcrumb.length > 0 && (
        <p className="breadcrumb">
          {breadcrumb.map((category, i) => (
            <p key={category + i} className="category">
              {category}
            </p>
          ))}
        </p>
      )}
      <div className="container">{children}</div>
    </div>
  );
};
