import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

type StudentCardProps = {
  student: Student;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  student,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: student.photoUrl }} style={styles.avatar} />

      <View style={styles.details}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.year}>{student.year}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => onToggleFlag(student.id)}
        style={[
          styles.flagButton,
          student.flagged ? styles.flaggedButton : styles.unflaggedButton,
        ]}
      >
        <Text
          style={student.flagged ? styles.flaggedText : styles.unflaggedText}
        >
          {student.flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    marginBottom: 12,
    borderRadius: 14,
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#e5e7eb",
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e1b4b",
  },
  year: {
    marginTop: 4,
    fontSize: 14,
    color: "#6b7280",
  },
  flagButton: {
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 18,
    borderWidth: 1,
  },
  unflaggedButton: {
    borderColor: "#7c3aed",
    backgroundColor: "#ffffff",
  },
  flaggedButton: {
    borderColor: "#d97706",
    backgroundColor: "#d97706",
  },
  unflaggedText: {
    color: "#6d28d9",
    fontWeight: "600",
  },
  flaggedText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
