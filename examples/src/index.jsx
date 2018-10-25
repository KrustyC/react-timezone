// eslint-disable-next-line
import 'typeface-roboto';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { Container, Section, Subtitle } from './components';
import TimePicker from '../../lib';


// eslint-disable-next-line
createGlobalStyle`
 body {
   padding: 0;
   margin: 0;
   font-family: Roboto !important;
 }
 * {
   font-family: Roboto !important;
 }
 h1, h2, h3, h4, h5, h6, p, span {
  color: #545252;
  margin: 10px;
 }
`;

class App extends Component {
  state = {
    timezone: 'Europe/London',
  };

  onChangeTimezone = timezone => this.setState({ timezone });

  render() {
    return (
      <Container>
        <div>
          <Section>
            <Subtitle>
              Default checkbox without labels
            </Subtitle>
            <TimePicker
              value={this.state.timezone}
              onChange={this.onChangeTimezone}
              inputProps={{
                placeholder: 'Select Timezone...',
                name: 'timezone'
              }}
            />
          </Section>
        </div>
      </Container>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
