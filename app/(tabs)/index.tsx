import { dummyConversationData } from "@/assets/assets";
import { styles } from "@/assets/styles/MessagesScreen.styles";
import ConvoItem from "@/components/ConvoItem";
import StoriesBar from "@/components/StoriesBar";
import StoryViewer from "@/components/StoryViewer";
import { Colors } from "@/constants/Colors";
import { Conversation, UserStory } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessagesScreen() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedStory, setSelectedStory] = useState<UserStory | null>(null);

  const router = useRouter();

  const fetchConversations = () => {
    setLoading(true);
    setTimeout(() => {
      setConversations(dummyConversationData as any);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const lowerSearch = search.toLowerCase();
  const filtered = search
    ? conversations.filter(
        (c) =>
          c.participant?.name.toLowerCase().includes(lowerSearch) ||
          c.participant?.handle?.toLowerCase().includes(lowerSearch),
      )
    : conversations;

  const openConvo = (c: Conversation) => {
    router.push(`/chat/${c._id}`);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Conversations</Text>
        <View style={styles.headerRight}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{conversations.length}</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <Ionicons name="search" size={16} color={Colors.outlineVariant} />
        <TextInput
          style={styles.searchInput}
          value={search}
          placeholder="Search conversations..."
          placeholderTextColor={Colors.outlineVariant}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons
              name="close-circle"
              size={16}
              color={Colors.outlineVariant}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Stories */}
      <StoriesBar onViewStory={(us) => setSelectedStory(us)} />

      {selectedStory && (
        <StoryViewer
          userStory={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
      {/* Divider */}
      <View style={styles.divider} />

      {/* Conversation list */}
      {loading ? (
        <ActivityIndicator style={{ marginTop: 40 }} color={Colors.primary} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(c) => c._id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ConvoItem
              convo={item}
              selected={false}
              onPress={() => openConvo(item)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Ionicons
                name="chatbubbles-outline"
                size={44}
                color={Colors.outlineVariant}
              />
              <Text style={styles.emptyTitle}>No conversations yet</Text>
              <Text style={styles.emptySubtitle}>Go to Search to start chatting</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}
