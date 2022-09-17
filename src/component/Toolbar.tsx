import { useEffect } from "react";
import styled from "styled-components";
import { Drawer } from "../lib";
import IU from "../lib/아이유.jpeg";
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
        <li
          style={{ background: "red" }}
          onClick={() => {
            editor.setStrokeStyle("red");
            editor.readyToPaint(true);
          }}
        >
          red
        </li>
        <li
          style={{ background: "blue", color: "#fff" }}
          onClick={() => {
            editor.setStrokeStyle("blue");
            editor.readyToPaint(true);
          }}
        >
          blue
        </li>
        <li
          style={{ background: "green" }}
          onClick={() => {
            editor.setStrokeStyle("green");
            editor.readyToPaint(true);
          }}
        >
          green
        </li>
        <li
          style={{ background: "black", color: "#fff" }}
          onClick={() => {
            editor.setStrokeStyle("black");
            editor.readyToPaint(true);
          }}
        >
          black
        </li>
      </Tab>
      <Tab className="thick">
        <li id="title">
          <h1>THICK</h1>
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(1);
            editor.readyToPaint(true);
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(2);
            editor.readyToPaint(true);
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(3);
            editor.readyToPaint(true);
          }}
        >
          3
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(4);
            editor.readyToPaint(true);
          }}
        >
          4
        </li>
      </Tab>
      <Tab className="eraser">
        <li id="title">
          <h1>ERASER</h1>
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(5);
            editor.setStrokeStyle("#fff");
            editor.readyToPaint(true);
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(15);
            editor.setStrokeStyle("#fff");
            editor.readyToPaint(true);
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(25);
            editor.setStrokeStyle("#fff");
            editor.readyToPaint(true);
          }}
        >
          3
        </li>
        <li
          onClick={() => {
            editor.setLineWidth(35);
            editor.setStrokeStyle("#fff");
            editor.readyToPaint(true);
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
          onClick={() => {
            editor.setImageSrc(IU);
          }}
        >
          아이유
        </li>
        <li
          onClick={() => {
            editor.readyToPaint(false);
            editor.addImage();
          }}
        >
          add
        </li>
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
