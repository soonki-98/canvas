import styled from "styled-components";
import Drawer from "../lib/app";
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
