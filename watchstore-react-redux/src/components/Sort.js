import React, { Component } from "react";

import { sortBy } from "lodash";
import { Button } from "react-bootstrap";

import styles from "./Sort.module.css";

// icon class name to be passed from watchList as a prop to sort
// arrow toggle - maybe just have initial state false then add a toggle for true/false for item sort asc/sce

export class Sort extends Component {
  state = {
    sortToggle: false
  };

  handleSortClick = () => {
    this.setState({ sortToggle: !this.state.sortToggle });

    this.props.onSort(this.props.sortKey);
  };

  render() {
    const { children } = this.props;
    const upIcon = (
      <i
        style={{
          fontSize: "13px",
          paddingLeft: "4px"
        }}
        className="fas fa-angle-double-up"
      />
    );

    const downIcon = (
      <i
        style={{
          fontSize: "13px",
          paddingLeft: "4px"
        }}
        className="fas fa-angle-double-down"
      />
    );

    const icon = this.state.sortToggle ? downIcon : upIcon;

    return (
      <Button
        onClick={this.handleSortClick}
        bsSize="xsmall"
        className={styles.sort_button}
      >
        {children} {icon}
      </Button>
    );
  }
}

export default Sort;
