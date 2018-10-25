import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { stringifyZone } from './utils/helpers';
import { timezoneListPropTypes } from './utils/propTypes';

const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  border: 1px solid #e6ebec;
  margin-top: -1px;
  border-radius: 0 0 3px 3px;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ show }) => !show && css`
    display: none;
  `}
`;

const ListItem = styled.li`
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 40px;
  cursor: pointer;
  color: #444;
  border-top: 1px solid black;

  :first-child {
    border-top: none;
  }

  ${({ focus }) => focus && css`
    background: #f0f0f0;
  `}

  :hover {
    background: black;
  }
`;

export default class TimezoneList extends Component {
  static propTypes = timezoneListPropTypes;

  filterTimezones = () => {
    const { query, children: timezones } = this.props;
    const formattedQuery = query.toLowerCase().replace(/\s+/g, '');

    if (!formattedQuery) {
      return timezones;
    }

    return timezones.filter(zone => zone.label
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(formattedQuery));
  }

  onSelectZone = zone => () => this.props.onSelectZone(zone.name);

  render() {
    const { offset, show } = this.props;

    return (
      <List show={show}>
        {this.filterTimezones().map(timezone => (
          <ListItem key={timezone.name} onClick={this.onSelectZone(timezone)}>
            {stringifyZone(timezone, offset)}
          </ListItem>
        ))}
      </List>
    );
  }
}
