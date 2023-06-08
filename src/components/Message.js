function Message(props) {
  return (
    <div>
      <ul>
        <p className="quote-title">
          Quote of the Moment:
        </p>
        <p className="quote">{props.message}</p>
      </ul>
    </div>
  );
}

export default Message;
