import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 16,
    },
    storyItem: { alignItems: "center", gap: 6 },
    addCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: Colors.outlineVariant,
        alignItems: "center",
        justifyContent: "center",
    },
    storyRing: {
        padding: 2,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    label: {
        fontSize: 13,
        fontWeight: "500",
        color: Colors.onSurface,
        width: 64,
        textAlign: "center",
    },
});
