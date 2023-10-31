import css from './ContactItem.module.css';
import { ReactComponent as IconDelete } from '../../img/icon-recycle-bin.svg';
import { ReactComponent as IconAvatar } from '../../img/icon-avatar.svg';

const ContactItem = ({ id, name, phone, deleteContact }) => {
  return (
    <li className={css.item}>
      <IconAvatar />
      <div className={css.wrap}>
        <p className={css.name}>{name}</p>
        <p className={css.phone}>{phone}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        <IconDelete />
      </button>
    </li>
  );
};

export default ContactItem;
