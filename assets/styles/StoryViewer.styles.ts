import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    progressRow: {
        position: "absolute",
        top: 56,
        left: 12,
        right: 12,
        flexDirection: "row",
        gap: 4,
        zIndex: 10,
    },
    progressTrack: {
        flex: 1,
        height: 3,
        backgroundColor: "rgba(255,255,255,0.25)",
        borderRadius: 4,
        overflow: "hidden",
    },
    progressFill: { height: "100%", backgroundColor: "#fff", borderRadius: 4 },
    header: {
        position: "absolute",
        top: 68,
        left: 12,
        right: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
    },
    userRow: { flexDirection: "row", alignItems: "center", gap: 10 },
    userName: { color: "#fff", fontWeight: "700", fontSize: 14 },
    userHandle: { color: "rgba(255,255,255,0.55)", fontSize: 11 },
    closeBtn: { padding: 6 },
    media: { width: SCREEN_W, height: SCREEN_H },
    tapZones: { position: "absolute", inset: 0, flexDirection: "row", zIndex: 5 },
    tapHalf: { flex: 1 },
});
