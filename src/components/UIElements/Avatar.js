
import "./Avatar.css";
const Avatar = (props) => {
  return (
    <div className="avatar" style={{width:`${props.width}`, height:`${props.height}`}} >
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
