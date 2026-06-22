import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
    },
    rowSelected: { backgroundColor: Colors.surfaceHigh },
    info: { flex: 1, minWidth: 0 },
    topRow: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" },
    nameCol: { flex: 1, minWidth: 0 },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.onSurface,
    },
    handle: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.primary,
        opacity: 0.6,
    },
    time: { fontSize: 12, color: Colors.onSurfaceVariant, marginLeft: 8 },
    lastMsg: {
        fontSize: 12,
        color: Colors.onSurfaceVariant,
        marginTop: 2,
    },
});
