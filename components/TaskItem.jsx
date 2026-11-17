import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task, text);

  const handleSave = () => {
    if (draft.trim().length > 0) onEdit(task.id, draft.trim());
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.editInput}
          value={draft}
          onChangeText={setDraft}
          onSubmitEditing={handleSave}
          autoFocus
          returnKeyType='Done'
        />
        <Pressable>
          <Text style={styles.actionText}>Save</Text>
        </Pressable>
      </View>
    );
  }
  
  return (
  <View style={styles.container}>
      <Text
        onPress={onToggle}
        style={[styles.text, task.done && styles.textDone]}
      >
        {task.text}
      </Text>
      {(onEdit || onDelete) && (
        <View style={styles.actions}>
          {onEdit && (
            <Pressable
              onPress={() => {
                setDraft(task.text);
                setIsEditing(true);
              }}
            >
              <Text style={styles.actionText}>Edit</Text>
            </Pressable>
          )}
          {onDelete && (
            <Pressable onPress={() => onDelete(task.id)}>
              <Text style={styles.actionText}>Delete</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#1A1A1E',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    flexShrink: 1,
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    gap: 12
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1E'
  },
  editInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#1A1A1E',
    fontSize: 16,
    paddingVertical: 2,
    marginRight: 10
  }
})