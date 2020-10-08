import React, { Component } from "react";
import "../Css/Post.css";
import { baseIp } from "../../config";

class Post1 extends Component {
  constructor(props) {
    super();
    this.state = {
      array: props.array,
    };
  }

  render() {
    const { array } = this.props;
    console.log(array);

    return (
      <div>
        {array.map((dataitem) => (
          <span
            key={dataitem._id}
            style={{ display: "inline-block", width: "200px", margin: "20px" }}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>
              {dataitem.imageurl.substring(7, 30)} {dataitem.year}
            </span>
            <embed
              src={baseIp + "/" + dataitem.imageurl}
              alt={dataitem.year}
              style={{ height: "200px", width: "200px", margin: "15px" }}
            />
            <a
              href={baseIp + "/" + dataitem.imageurl}
              target="_blank"
              className="btn btn-danger"
              style={{ borderRadius: "9999em", color: "white" }}
            >
              View/Download
            </a>
          </span>
        ))}
        <br />
        {/* <button
          className="btn btn-danger"
          onClick={() => {
            this.props.function(1);
          }}
          style={{
            width: "300px",
            margin: "40px",
            borderRadius: "15px",
            color: "white",
          }}
        >
          Go Back
        </button> */}
      </div>
    );
  }
}
export default Post1;
