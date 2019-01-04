import React, { Component } from "react";

import { sortBy } from "lodash";
import {
  Button,
  InputGroup,
  FormGroup,
  FormControl,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

import styles from "./Sort.module.css";

const Sort = ({ sortKey, onSort, children }) => {
  return (
    <FormGroup>
      <DropdownButton
        componentClass={InputGroup.Button}
        id="input-dropdown-addon"
        title="Sort by"
      >
        <MenuItem
          className={styles.dropdown_menu}
          key={sortKey}
          onSelect={() => onSort(sortKey)}
        >
          {children}
        </MenuItem>
      </DropdownButton>
    </FormGroup>
  );
};

export default Sort;

// const Sort = ({ sortKey, onSort, children }) => (
//   <Button onClick={() => onSort(sortKey)} className="sort-button">
//     {children}
// 	</Button>
// );
