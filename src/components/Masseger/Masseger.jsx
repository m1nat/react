import SendMessageInput from '../../UI/send-message-input';

import classes from './Masseger.module.scss';

const Messanger = () => {
  return (
    <div className={classes.messanger}>
      <div className={classes.header}>
        <div className={classes.back_to_main}>
          <p>Back</p>
        </div>
        <div className={classes.friend_info}>
          <p>Sinkevick Vicktoria</p>
        </div>
        <div className={classes.friend_avatar} ></div>
      </div>
      <div className={classes.window_message}></div>
      <div className={classes.input_message}>
        <SendMessageInput />
      </div>
    </div>
  )
};

export default Messanger;