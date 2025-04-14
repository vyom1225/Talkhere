export const createChatSlice = (set , get) => ({
    selectedChatType : undefined,
    selectedChatData : undefined,
    selectedChatMessages : [],
    directMessagesContacts : [],
    channels : [],
    setChannels : (channels) => set({channels}),
    setSelectedChatType : (selectedChatType) => set({selectedChatType}),
    setSelectedChatData : (selectedChatData) => set({selectedChatData}),
    setSelectedChatMessages : (selectedChatMessages) => set({selectedChatMessages}),
    setDirectMessagesContacts : (directMessagesContacts) => set({directMessagesContacts}),

    closeChat : () => set({
        selectedChatType:undefined,
        selectedChatData:undefined,
        selectedChatMessages:[],
    }),

    addMessage : (message) => {

        const selectedChatMessages = get().selectedChatMessages;
        const selectedChatType = get().selectedChatType;

        set(
            {
                selectedChatMessages : [
                    ...selectedChatMessages,
                    {
                        ...message,
                        sender : selectedChatType === "channel"
                            ? message.sender
                            : message.sender._id,
                        receiver : selectedChatType === "channel"
                            ? message.receiver
                            : message.receiver._id,
                    }
                ]
            }
        )
        
    },

    addChannel : (channel) =>{
        const channels = get().channels;
        set({channels : [channel, ...channels]})
    }
})