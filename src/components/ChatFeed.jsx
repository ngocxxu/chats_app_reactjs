import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = ({ chats, activeChat, userName, messages, ...props }) => {
  //current chat
  //check if chats exist and
  const chat = chats && chats[activeChat];
  //console.log(chat);
  //console.log('chats[activeChat]',chats[activeChat])
  const renderMessage = () => {
    const keys = Object.keys(messages);
    //console.log(keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index == 0 ? null : keys[index - 1];
      const isMyMessage = userName == message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            read-receipt
          </div>
        </div>
      );
    });
  };
  //goi ham`
  renderMessage();
  //check !chat
  if(!chat) return 'Loading...';
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person)=>`${person.person.username}`)}
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
