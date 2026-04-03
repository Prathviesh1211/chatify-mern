import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[calc(100dvh-2rem)]">
      <BorderAnimatedContainer>
        {/* LEFT SIDE — hide on mobile when a chat is selected */}
        <div className={`
          ${selectedUser ? "hidden md:flex" : "flex"}
          w-full md:w-80 border-zinc-600/30 backdrop-blur-sm flex-col
        `}>
          <ProfileHeader />
          <ActiveTabSwitch />
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE — full width on mobile when chat is selected */}
        <div className={`
          ${selectedUser ? "flex" : "hidden md:flex"}
          flex-1 flex-col bg-zinc-900/20 backdrop-blur-sm
        `}>
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
export default ChatPage;