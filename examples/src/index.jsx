// eslint-disable-next-line
import 'typeface-roboto';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  A,
  Container,
  P,
  Spacer,
  Subtitle,
  Title,
} from './components';
import TimePicker from '../../lib';


class App extends Component {
  state = {
    timezone: 'Europe/London',
  };

  onChangeTimezone = timezone => this.setState({ timezone });

  render() {
    return (
      <Container>
        <Title>
          @krustyc/react-timezone
        </Title>
        <Subtitle>
          Timezone Picker for React built with
          {' '}
          <A href="https://www.styled-components.com/" target="_blank">styled-components</A>
        </Subtitle>
        <P>
          Please note, this is a fork of
          {' '}
          <A href="https://github.com/vahnag/react-timezone" target="_blank">
            @vahnag version
          </A>
          .
          <br />
          I've re-written it using Babel 7, and styled-components, and adding the possibility to
          pass an array of custom timezones.
        </P>
        <Spacer />
        <TimePicker
          value={this.state.timezone}
          onChange={this.onChangeTimezone}
          inputProps={{
            placeholder: 'Select Timezone...',
            name: 'timezone'
          }}
        />


      </Container>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
