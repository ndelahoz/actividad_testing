import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like/>,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
    it("Defaults to Likes:0", () => {
        const label = container.querySelector("p");
        expect(label.textContent).toBe("Likes: 0");
      });

    it("Like button works", () => {

        const buttonsList= container.querySelectorAll("button");
        const likeBut= buttonsList[0];
        //const dislikeBut=buttonsList[1];

        act(() => {
            likeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });

        const label = container.querySelector("p");
        expect(label.textContent).toBe("Likes: 1");
      });

      it("Dislike button works", () => {

        const buttonsList= container.querySelectorAll("button");
        const likeBut= buttonsList[0];
        const dislikeBut=buttonsList[1];

        act(() => {
            likeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });
          act(() => {
            likeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });
          act(() => {
            likeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });

          act(() => {
            dislikeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });

        const label = container.querySelector("p");
        expect(label.textContent).toBe("Likes: 2");
      });

});
