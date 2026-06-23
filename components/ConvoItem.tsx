import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Conversation } from "@/types";
import { styles } from "@/assets/styles/ConvoItem.styles";
import Avatar from "./Avatar";
import { formatTime } from "@/utils/formatTime";

interface ConvoItemProps {
  convo: Conversation;
  selected: boolean;
  onPress: () => void;
}

export default function ConvoItem({
  convo,
  selected,
  onPress,
}: ConvoItemProps) {
  const name = convo.participant?.name || "User";
  const avatar = convo.participant?.avatar;
  const online = convo.participant?.isOnline;
  const sub = `@${convo.participant?.handle}`;
  const lastMsg =
    convo.lastMessage?.text ||
    (convo.lastMessage?.mediaType === "image"
      ? "Photo"
      : convo.lastMessage?.mediaType
        ? "Video"
        : "Start a conversation");

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.row, selected && styles.rowSelected]}
    >
      <Avatar name={name} src={avatar} size={48} online={online} />
      <View style={styles.info}>
        <View style={styles.topRow}>
          <View style={styles.nameCol}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.handle}>{sub}</Text>
          </View>
          {convo.updatedAt && (
            <Text style={styles.time}>{formatTime(convo.updatedAt)}</Text>
          )}
        </View>
        <Text style={styles.lastMsg} numberOfLines={1}>
          {lastMsg}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
