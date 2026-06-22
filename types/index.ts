export interface User {
    _id: string;
    name: string;
    email: string;
    handle: string;
    avatar?: string;
    bio?: string;
    isOnline: boolean;
    lastSeen: string;
}

export interface Message {
    _id: string;
    sender: string;
    receiver: string;
    text?: string;
    mediaUrl?: string;
    mediaType?: "image" | "video";
    read: boolean;
    createdAt: string;
    conversationId: string;
}

export interface Conversation {
    _id: string;
    participant?: User; // For 1-on-1 chats
    lastMessage?: Message;
    updatedAt: string;
}

export interface Story {
    _id: string;
    user: User;
    mediaUrl: string;
    mediaType: "image" | "video";
    createdAt: string;
}

export interface UserStory {
    user: User;
    stories: Story[];
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
}

export interface WsEvent {
    type: string;
    payload?: any;
    senderId?: string;
    isTyping?: boolean;
    userId?: string;
    isOnline?: boolean;
    user?: User;
    conversationId?: string;
    [key: string]: any;
}
