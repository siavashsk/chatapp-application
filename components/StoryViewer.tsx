import {
  View,
  Text,
  Animated,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { UserStory } from "@/types";
import { styles } from "@/assets/styles/StoryViewer.styles";
import Avatar from "./Avatar";
import { Ionicons } from "@expo/vector-icons";
import { VideoView, useVideoPlayer } from "expo-video";

interface Props {
  userStory: UserStory;
  onClose: () => void;
}

const STORY_DURATION = 5000;

export default function StoryViewer({ userStory, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const animRef = useRef<Animated.CompositeAnimation>(null);

  const story = userStory.stories[currentIndex];

  const startProgress = () => {
    progressAnim.setValue(0);
    animRef.current = Animated.timing(progressAnim, {
      toValue: 1,
      duration: STORY_DURATION,
      useNativeDriver: false,
    });
    animRef.current.start(({ finished }) => {
      if (finished) goNext();
    });
  };

  useEffect(() => {
    startProgress();
    return () => animRef.current?.stop();
  }, []);

  const goNext = () => {
    animRef.current?.stop();
    if (currentIndex < userStory.stories.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onClose();
    }
  };

  const goPrev = () => {
    animRef.current?.stop();
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return (
    <Modal visible animationType="fade" statusBarTranslucent>
      <View style={styles.container}>
        {/* Progress bars */}
        <View style={styles.progressRow}>
          {userStory.stories.map((_, idx) => (
            <View key={idx} style={styles.progressTrack}>
              <Animated.View
                style={[
                  styles.progressFill,
                  idx < currentIndex
                    ? { width: "100%" }
                    : idx === currentIndex
                      ? {
                          width: progressAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                          }),
                        }
                      : { width: "0%" },
                ]}
              />
            </View>
          ))}
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userRow}>
            <Avatar
              name={userStory.user.name}
              src={userStory.user.avatar}
              size={38}
            />
            <View>
              <Text style={styles.userName}>{userStory.user.name}</Text>
              <Text style={styles.userHandle}>{userStory.user.handle}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={26} color="rgba(255,255,255,0.85)" />
          </TouchableOpacity>
        </View>

        {/* Media */}
        {story.mediaType === "video" ? (
          <StoryVideoPlayer uri={story.mediaUrl} style={styles.media} />
        ) : (
          <Image
            source={{ uri: story.mediaUrl }}
            style={styles.media}
            resizeMode="contain"
          />
        )}

        {/* Tap zones */}
        <View style={styles.tapZones}>
          <TouchableOpacity style={styles.tapHalf} onPress={goPrev} />
          <TouchableOpacity style={styles.tapHalf} onPress={goNext} />
        </View>
      </View>
    </Modal>
  );
}

function StoryVideoPlayer({ uri, style }: { uri: string; style: any }) {
  const player = useVideoPlayer({ uri }, (p) => {
    p.loop = false;
    p.play();
  });
  return <VideoView player={player} style={style} />;
}
