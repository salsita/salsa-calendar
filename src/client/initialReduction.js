import moment from 'moment';
import { Map, List } from 'immutable';

export default new Map({
  appState: new Map({
    initialized: false,
    startOfWeek: 'monday',
    firstDay: 'monday',
    date: moment(),
    currentMonth: moment(),
    days: List.of(),
    daysInWeek: List.of()
  }),
  effects: List.of()
});
