import "./Avatar.css";
const Avatar = (props) => {
  return (
    <div
      className="avatar"
      style={{ width: `${props.width}`, height: `${props.height}` }}
      onClick={props.onClick}
    >
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default Avatar;
