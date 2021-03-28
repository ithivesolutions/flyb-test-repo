import React from "react";

import { mount } from "enzyme";
import { expect } from "chai";

import CandidateDtls from "../../../src/components/candidates/CandidateDtls";

describe("React Candidate Details unit tests", () => {
  let wrapper;

  const props = {
    showDetails: true,
    eachCandidate: {
      jobid: 11200503,
      firstname: "Jonathan",
      lastname: "Freeman",
      email: "",
      available_from: "",
      state: "",
      desired_salary: "120000",
      currently_employed: "Yes",
      current_salary: "105000",
    },
  };
  const state = {
    successful: false,
  };

  beforeEach(() => {
    wrapper = mount(<CandidateDtls {...props} />);
    wrapper.setState(state);
    wrapper.update();
  });

  it("renders Candidate Details component", () => {
    expect(wrapper.exists(".list__header")).to.equal(true);
  });
});
