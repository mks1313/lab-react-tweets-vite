import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  const pip = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={pip.user.image} />

      <div className="body">
        <div className="top">
          <User name={pip.user.name} handle={pip.user.handle} />
          <Timestamp time={pip.timestamp} />
        </div>

        <Message message={pip.message} />

        <div className="actions">
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
