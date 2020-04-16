// This file is part of InvenioRDM
// Copyright (C) 2020 CERN.
// Copyright (C) 2020 Northwestern University.
//
// Invenio App RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import { DraftsForms } from "./DraftsForms";

const getRecordFromDOM = () => {
  const element = document.getElementsByName("drafts-record");
  if (element.length > 0 && element[0].hasAttribute("value")) {
    return JSON.parse(element[0].value);
  }
  return null;
};

const getConfigFromDOM = () => {
  const element = document.getElementsByName("drafts-config");
  if (element.length > 0 && element[0].hasAttribute("value")) {
    return JSON.parse(element[0].value);
  }
  return null;
};

ReactDOM.render(
  <DraftsForms record={getRecordFromDOM()} config={getConfigFromDOM()} />,
  document.getElementById("drafts-forms")
);
