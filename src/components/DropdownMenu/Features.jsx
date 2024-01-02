import Todo from '../../../images/icon-todo.svg';
import Calendar from '../../../images/icon-calendar.svg';
import Reminders from '../../../images/icon-reminders.svg';
import Planning from '../../../images/icon-planning.svg';

export default function Features() {
  return (
    <>
      <ul>
        <li>
          <img src={Todo} alt="Todo Icon" />
          <span>Todo</span>
        </li>
        <li>
          <img src={Calendar} alt="Calendar Icon" />
          <span>Calendar</span>
        </li>
        <li>
          <img src={Reminders} alt="Reminders Icon" />
          <span>Reminders</span>
        </li>
        <li>
          <img src={Planning} alt="Planning Icon" />
          <span>Planning</span>
        </li>
      </ul>
    </>
  );
}
