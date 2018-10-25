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
  border: 1px solid #EBEEEE;
  margin-top: -1px;
  border-radius: 0 0 3px 3px;
  background: #FFFFFF;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ show }) => !show && css`
    display: none;
  `}

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #D6D6D6;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #484747;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #484747; 
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0px 12px;
  height: 40px;
  cursor: pointer;
  color: #353636;
  border-top: 1px solid #EBEEEE;

  :first-child {
    border-top: none;
  }

  :hover {
    background: #EBEEEE;
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
