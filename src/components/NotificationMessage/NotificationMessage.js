import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => {
  return <p style={{ margin: 20, fontWeight: 600 }}>{message}</p>;
};

NotificationMessage.protoType = {
  message: PropTypes.string,
};

export default NotificationMessage;
