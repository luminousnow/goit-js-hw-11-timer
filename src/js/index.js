import '../scss/style.scss';
import CountdownTimer from './countdown-timer.js';

const timer = new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Oct 27, 2020'),
});
