import React, { PropTypes } from 'react';
import MomentPropType from 'react-moment-proptypes';

import PureView from './PureView';

export default class MonthSelect extends PureView {

  static propTypes = {
    date: MomentPropType.momentObj,
    onNextMonth: PropTypes.func,
    onPrevMonth: PropTypes.func
  }

  render() {
    const { date, onNextMonth, onPrevMonth } = this.props;

    return (
      <div className="month-select">
        <span className="title">{date.format('MMMM YYYY')}</span>
        <a className="prev" onClick={onPrevMonth}>Previous</a>
        <a className="next" onClick={onNextMonth}>Next</a>
      </div>
    );
  }
}