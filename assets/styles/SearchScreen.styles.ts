import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: Colors.surface },
    header: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 16,
    },
    title: { fontSize: 22, fontWeight: "500", color: Colors.onSurface, letterSpacing: -0.5 },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginHorizontal: 16,
        marginBottom: 8,
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderRadius: 100,
        backgroundColor: Colors.surfaceHigh,
    },
    searchInput: { flex: 1, fontSize: 16, color: Colors.onSurface },
    list: { paddingHorizontal: 12, paddingTop: 8, gap: 8, paddingBottom: 20 },
    userRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 14,
        borderRadius: 18,
        backgroundColor: Colors.surfaceLowest,
    },
    userInfo: { flex: 1, minWidth: 0 },
    nameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    userName: { fontSize: 16, fontWeight: "600", color: Colors.onSurface },
    userHandle: { fontSize: 12, fontWeight: "500", color: Colors.primary },
    userEmail: { fontSize: 14, color: Colors.onSurfaceVariant, marginTop: 2 },
    empty: { textAlign: "center", marginTop: 60, color: Colors.onSurfaceVariant, fontSize: 14 },
});
