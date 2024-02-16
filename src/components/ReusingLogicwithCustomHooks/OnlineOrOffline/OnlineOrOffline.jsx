import useOnlineOrOffline from "../../../hooks/useOnlineOrOffline";

export default function OnlineOrOffline() {
  const isOnline = useOnlineOrOffline();
  return <h1> {isOnline ? "✅ Online" : "❌ Disconnected"} </h1>;
}
