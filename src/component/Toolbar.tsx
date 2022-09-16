import { useEffect } from "react";
import styled from "styled-components";
import { Drawer } from "../lib";
interface IToolbarType {
  editor: Drawer;
}
const Toolbar = ({ editor }: IToolbarType) => {
  return (
    <Wrapper>
      <Tab className="color">
        <li id="title">
          <h1>COLOR</h1>
        </li>
        <li style={{ background: "red" }} onClick={() => (editor.setStrokeStyle = "red")}>
          red
        </li>
        <li style={{ background: "blue", color: "#fff" }} onClick={() => (editor.setStrokeStyle = "blue")}>
          blue
        </li>
        <li style={{ background: "green" }} onClick={() => (editor.setStrokeStyle = "green")}>
          green
        </li>
        <li style={{ background: "black", color: "#fff" }} onClick={() => (editor.setStrokeStyle = "black")}>
          black
        </li>
      </Tab>
      <Tab className="thick">
        <li id="title">
          <h1>THICK</h1>
        </li>
        <li onClick={() => (editor.setLineWidth = 1)}>1</li>
        <li onClick={() => (editor.setLineWidth = 2)}>2</li>
        <li onClick={() => (editor.setLineWidth = 3)}>3</li>
        <li onClick={() => (editor.setLineWidth = 4)}>4</li>
      </Tab>
      <Tab className="eraser">
        <li id="title">
          <h1>ERASER</h1>
        </li>
        <li
          onClick={() => {
            editor.setLineWidth = 5;
            editor.setStrokeStyle = "#fff";
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            editor.setLineWidth = 15;
            editor.setStrokeStyle = "#fff";
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            editor.setLineWidth = 25;
            editor.setStrokeStyle = "#fff";
          }}
        >
          3
        </li>
        <li
          onClick={() => {
            editor.setLineWidth = 35;
            editor.setStrokeStyle = "#fff";
          }}
        >
          4
        </li>
      </Tab>
      <Tab className="image">
        <li id="title">
          <h1>IMAGE</h1>
        </li>
        <li
          onClick={() =>
            (editor.setImageSrc =
              "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90")
          }
        >
          아이유
        </li>
        <li onClick={() => editor.addImage}>add</li>
        <li onClick={() => console.log(editor.getAllImages)}>console</li>
      </Tab>
    </Wrapper>
  );
};

export default Toolbar;

const Wrapper = styled.div`
  display: flex;
`;

const Tab = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    list-style: none;
    cursor: default;
  }

  li:not(#title) {
    border: 1px solid;
  }
`;
