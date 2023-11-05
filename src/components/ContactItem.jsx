import { ReactComponent as IconDelete } from '../img/icon-recycle-bin.svg';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { IconButton, ListItem, ListItemText, SvgIcon } from '@mui/material';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem>
      <AccountCircleRoundedIcon
        sx={{
          fill: 'rgb(255, 171, 64)',
          fontSize: '48px',
          marginRight: '24px',
        }}
      />

      <ListItemText primary={name} secondary={number} />

      <IconButton type="button" onClick={() => deleteContact(id)}>
        <SvgIcon sx={{ fontSize: '36px' }}>
          <IconDelete />
        </SvgIcon>
      </IconButton>
    </ListItem>
  );
};

export default ContactItem;
