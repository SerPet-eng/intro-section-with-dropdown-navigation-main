import Todo from '../../../images/icon-todo.svg';
import Calendar from '../../../images/icon-calendar.svg';
import Planning from '../../../images/icon-planning.svg';
import Reminders from '../../../images/icon-reminders.svg';

export default function Features() {
  return (
    <>
      <div className="features">
        <ul className="features__content">
          <li className="features__list">
            <img className="content__icon" src={Todo} alt="Todo Icon" />
            <span>Todo</span>
          </li>
          <li className="features__list">
            <img className="content__icon" src={Calendar} alt="Calendar Icon" />
            <span>Calendar</span>
          </li>
          <li className="features__list">
            <img className="content__icon" src={Planning} alt="Planning Icon" />
            <span>Planning</span>
          </li>
          <li className="features__list">
            <img className="content__icon" src={Reminders} alt="Reminders" />
            <span>Reminders</span>
          </li>
        </ul>
      </div>
    </>
  );
}
