import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });
describe("Header", () => {
  it("should render Header", () => {
    const wrapper = shallow(<Header />);
    const text = (
      <div>
        <h1>Header</h1>
        <p>This is the header page done right.</p>
      </div>
    );
    //console.log(wrapper.debug());
    expect(wrapper.contains(text)).toEqual(false);
  });
});
