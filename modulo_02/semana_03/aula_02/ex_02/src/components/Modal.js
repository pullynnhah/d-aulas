export default function Modal({ title, children, func }) {
  return (
    <div className="modal">
      <div className="content">
        <div className="header">
          <div className="title">{title}</div>{" "}
          <button className="close" onClick={() => func(false)}>
            ×
          </button>
        </div>

        <div className="body"> {children}</div>
      </div>
    </div>
  );
}
