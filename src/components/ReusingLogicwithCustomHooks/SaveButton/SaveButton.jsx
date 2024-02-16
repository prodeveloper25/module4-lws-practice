import useOnlineOrOffline from "../../../hooks/useOnlineOrOffline";

export default function SaveButton() {
  const isOnline = useOnlineOrOffline();
  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
