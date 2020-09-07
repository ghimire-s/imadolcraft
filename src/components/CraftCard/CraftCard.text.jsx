import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CraftCard from "./CraftCard";

Enzyme.configure({ adapter: new Adapter() });
describe("CraftCard", () => {
  it("should render CraftCard", () => {
    const wrapper = shallow(<CraftCard />);
    const text = (
      <div>
        <h1>CraftCard</h1>
        <p>This is the header page done right.</p>
      </div>
    );
    //console.log(wrapper.debug());
    expect(wrapper.contains(text)).toEqual(false);
  });
});
