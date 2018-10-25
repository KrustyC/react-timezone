import React, { Component } from 'react';
import styled from 'styled-components';

import { indexPropTypes, defaultIndexPropTypes } from './utils/propTypes';
import { stringifyZone } from './utils/helpers';
import TimezoneInput from './TimezoneInput';
import TimezoneList from './TimezoneList';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  * {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 13px;
  }
`;

export default class TimezonePicker extends Component {
  static propTypes = indexPropTypes;

  static defaultProps = defaultIndexPropTypes;

  constructor(props) {
    super(props);

    const { value } = props;

    this.state = {
      timezones: this.props.timezones,
      showList: false,
      query: '',
      currentZone: value ? this.props.timezones.find(zone => zone.name === value) : null,
    };

    this.timezoneRef = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== (state.currentZone && state.currentZone.name)) {
      return { currentZone: state.timezones.find(zone => zone.name === props.value) };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);

    if (this.state.timezones.length === 0) {
      import('./utils/timezones').then(m => this.setState({ timezones: m.default }));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.timezoneRef.current.contains(e.target)) {
      // Clicking inside the component, so no action needs to be done
      return null;
    }
    return this.hideList();
  }

  showList = () => this.setState({ showList: true });

  hideList = () => this.setState({ showList: false })

  onUpdateQuery = e => this.setState({ query: e.target.value });

  onSelectZone = (name) => {
    this.props.onChange(name);
    this.hideList();
  }

  render() {
    const {
      offset, inputProps, className, style, displayOffset
    } = this.props;
    const {
      currentZone, query, showList, timezones
    } = this.state;

    const value = (currentZone && !showList)
      ? stringifyZone(currentZone, offset, !displayOffset)
      : query;

    return (
      <Wrapper className={className} style={style} ref={this.timezoneRef}>
        <TimezoneInput
          {...inputProps}
          onFocus={this.showList}
          onChange={this.onUpdateQuery}
          value={value}
        />
        <TimezoneList
          show={showList}
          query={query}
          offset={offset}
          onSelectZone={this.onSelectZone}
        >
          {timezones}
        </TimezoneList>
      </Wrapper>
    );
  }
}
