import React from "react";

import { mount } from "enzyme";
import { expect } from "chai";

import App from "../src/components/App";
import Header from "../src/components/headerFooter/Header";
import Candidates from "../src/components/candidates/Candidates";

describe("React app unit tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
    wrapper.setState({ appTitle: "Test - App", showDetails: false });
    wrapper.update();
  });

  it("renders App without crashing", () => {
    expect(wrapper.contains(<App />)).to.equal(true);
  });

  it("renders Header component", () => {
    wrapper = mount(<Header />);
    expect(wrapper.contains(<Header />)).to.equal(true);
    expect(wrapper.exists(".header")).to.equal(true);
  });

  it("renders Candidate component", () => {
    wrapper = mount(<Candidates />);
    expect(wrapper.contains(<Candidates />)).to.equal(true);
    expect(wrapper.exists(".list__header")).to.equal(true);
  });

});
