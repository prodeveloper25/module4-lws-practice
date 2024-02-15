import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function OnlineOfline() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <div>I am {isOnline ? "Online" : "Offline"}</div>
    </div>
  );
}
