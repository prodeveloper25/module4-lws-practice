import { useState } from "react";
import ChatRoom from "./ChatRoom";

const Chat1 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <ChatRoom />}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </>
  );
};

export default Chat1;
