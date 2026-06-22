import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: { position: "relative" },
    circle: { alignItems: "center", justifyContent: "center", overflow: "hidden" },
    initials: { color: "#fff", fontWeight: "700" },
    indicator: {
        position: "absolute",
        borderWidth: 2,
        borderColor: "#fff",
    },
});
