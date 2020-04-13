import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Button, Icon, Message, Container, Grid } from "semantic-ui-react";

import { DepositSection, DepositTextField } from "./RDMDepositComponents";
import { RDMDepositApiClient } from "./RDMDepositAPIClient";
import { RDMDepositApiController } from "./RDMDepositApiController";
import {
  DepositFormApp,
  PublishButton,
  SaveButton,
  connect,
} from "../../../react_invenio_deposit";

class RecordPreviewer extends Component {
  render() {
    return (
      <Message>
        <Message.Header>Current record</Message.Header>
        <pre>{JSON.stringify(this.props.deposit.record, undefined, 2)}</pre>
      </Message>
    );
  }
}
RecordPreviewer = connect(RecordPreviewer);

export class RDMDepositForm extends Component {
  constructor(props) {
    super(props);
    this.config = props.config || {};
    this.controller = new RDMDepositApiController(new RDMDepositApiClient());
    this.state = {
      record: props.record || {},
    };
  }

  render() {
    return (
      <DepositFormApp
        apiController={this.controller}
        record={this.state.record}
        config={this.config}
      >
        <RecordPreviewer record={this.state.record} />
        <Grid columns={2}>
          <Grid.Column>
            {/*TODO: Add global errors <ErrorMessage fieldPath="message" /> */}
            <DepositSection header={<h3>Files</h3>}></DepositSection>

            <DepositSection header={<h3>Identifiers</h3>}></DepositSection>

            <DepositSection
              header={<h3>Required Information</h3>}
            ></DepositSection>

            <DepositSection header={<h3>Recommended information</h3>}>
              {/* TODO: Might be that a component can combine these together. But it might be inflexible... */}
              <label htmlFor="version">
                <Icon disabled name="code branch" />
                Version
              </label>
              <DepositTextField name="version" />
            </DepositSection>

            <DepositSection header={<h3>Funding</h3>}></DepositSection>

            <DepositSection header={<h3>Related Work</h3>}></DepositSection>

            <DepositSection
              header={<h3>Geographical locations</h3>}
            ></DepositSection>

            {/*TODO: Implement dynamically */}
            <DepositSection
              header={<h3>Dynamic Vocabulary A</h3>}
            ></DepositSection>
          </Grid.Column>
          <Grid.Column>
            <Container>
              <PublishButton />
              <SaveButton />
            </Container>
          </Grid.Column>
        </Grid>
      </DepositFormApp>
    );
  }
}
