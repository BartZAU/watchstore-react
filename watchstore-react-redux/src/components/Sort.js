import React, { Component } from "react";

import { sortBy } from "lodash";
import { Button } from "react-bootstrap";

const Sort = ({ sortKey, onSort, children }) => (
  <Button onClick={() => onSort(sortKey)} className="sort-button">
    {children}
  </Button>
);

export default Sort;
