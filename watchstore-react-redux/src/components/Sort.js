import React from "react";

import { sortBy } from "lodash";
import { Button } from "react-bootstrap";

import styles from "./Sort.module.css";

// icon class name to be passed from watchList as a prop to sort
// arrow toggle - maybe just have initial state false then add a toggle for true/false for item sort asc/sce
const Sort = ({ sortKey, children, onSort }) => (
  <Button onClick={() => onSort(sortKey)} className={styles.sort_button}>
    {children}
    <i
      style={{
        fontSize: "13px",
        paddingLeft: "4px"
        // paddingRight: "2px"
      }}
      className="fas fa-angle-double-up"
    />
  </Button>
);

export default Sort;
