import PropTypes from 'prop-types';

function Message({ message }) {
  return (
    <div>
      <ul>
        <p className="quote-title">
          Quote of the Moment:
        </p>
        <p className="quote">{message}</p>
      </ul>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
