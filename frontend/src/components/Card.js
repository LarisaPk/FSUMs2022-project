import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// Component with inline CSS. Consider to make other components the same. Or separate styles from here to css file.
const Card = (props) => {
  const card = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "7em",
    paddingBottom: "1em",
    backgroundColor: "#D9D9D9",
    margin: "0.5em",
    borderRadius: "0.5em",
    boxShadow: "5px 5px 2px grey",
  };

  const container = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    padding: "1em",
    width: "90%",
  };

  const imageStyle = {
    width: "90%",
    paddingTop: "1em",
  };

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    minWidth: "5em",
    border: "none",
    background: "none",
  };

  return (
    <div style={card}>
      <img style={imageStyle} src={props.post.image} alt=""></img>
      <div style={container}>
        <button style={buttonStyle} onClick={props.deletePost}>
          <FontAwesomeIcon
            icon={faTrashCan}
            size="xl"
            style={{ marginBottom: "0.5em" }}
          />
          Delete
        </button>
        <button style={buttonStyle}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="xl"
            style={{ marginBottom: "0.5em" }}
          />
          Edit
        </button>
      </div>
    </div>
  );
};
export default Card;
