import React from "react";

import { sortBy } from "lodash";
import { Button } from "react-bootstrap";

import styles from "./Sort.module.css";

const Sort = ({ sortKey, children, onSort }) => (
  <Button onClick={() => onSort(sortKey)} className={styles.sort_button}>
    {children}
    <i
      style={{
        fontSize: "14px",
        paddingLeft: "2.5px",
        paddingRight: "2.5px"
      }}
      className="fas fa-shopping-cart "
    />
  </Button>
);

export default Sort;
