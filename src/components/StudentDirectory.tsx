import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import StudentCard, { type Student } from "./StudentCard";

const initialStudents: Student[] = [
  {
    id: "1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
    flagged: false,
  },
  {
    id: "3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
    flagged: false,
  },
  {
    id: "4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
    flagged: false,
  },
  {
    id: "5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
    flagged: false,
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  function toggleFlag(id: string) {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>
      <Text style={styles.count}>{students.length} students</Text>

      <TextInput
        accessibilityLabel="Search students by name"
        style={styles.search}
        placeholder="Search students..."
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={styles.list}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onToggleFlag={toggleFlag}
            />
          ))
        ) : (
          <Text style={styles.empty}>No students found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3ff",
    paddingHorizontal: 20,
    paddingTop: 56,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1e1b4b",
  },
  count: {
    marginTop: 5,
    marginBottom: 18,
    color: "#6b7280",
  },
  search: {
    backgroundColor: "#ffffff",
    borderColor: "#ddd6fe",
    borderRadius: 12,
    borderWidth: 1,
    padding: 13,
    marginBottom: 16,
    fontSize: 16,
  },
  list: {
    paddingBottom: 24,
  },
  empty: {
    marginTop: 24,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 16,
  },
});
