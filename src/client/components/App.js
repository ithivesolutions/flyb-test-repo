import React from "react";

import Header from "./headerFooter/Header";
import Candidates from "./candidates/Candidates";
import CandidateDtls from "./candidates/CandidateDtls";

import Candidate from "./utils/input.json";

export default class App extends React.Component {
  state = { appTitle: "Test - App", showDetails: false };

  componentDidMount() {
    this.setState({
      ...Candidate,
    });
  }

  handleBack = () => {
    this.setState({
      showDetails: false,
    });
  };

  handleDetails = (dtls) => {
    this.setState({
      showDetails: true,
      eachCandidate: dtls,
    });
  };

  render() {
    const state = this.state;

    return (
      <div>
        <Header
          appTitle={state.appTitle}
          toggleLightDark={() => this.toggleLightDark()}
        />
        {!state.showDetails ? (
          <Candidates
            candidates={state.candidates}
            handleDetails={(dtls) => this.handleDetails(dtls)}
          />
        ) : (
          <CandidateDtls
            eachCandidate={state.eachCandidate}
            handleBack={() => this.handleBack()}
          />
        )}
      </div>
    );
  }
}
