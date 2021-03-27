import React from "react";

export default class Candidates extends React.Component {
  eachCandidate = (candit) => {
    return (
      <div
        className="container"
        key={candit.jobid}
        onClick={() => {
          this.props.handleDetails(candit);
        }}
      >
        <button className="list__candidate">
          {candit.firstname} {candit.lastname}
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="list__header"> List of Candidates </div>
        {this.props.candidates &&
          this.props.candidates.map((eachCandidate) =>
            this.eachCandidate(eachCandidate)
          )}
      </div>
    );
  }
}
