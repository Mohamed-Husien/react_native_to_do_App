

import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles';

const TodoItem = ({ item, toggleTodo, deleteTodo, goToDetails }) => {
    return (
        <TouchableOpacity onPress={() => goToDetails(item)}>
            <View style={globalStyles.todoItem}>
                <View style={{ flex: 1 }}>
                    <Text
                        style={[
                            globalStyles.todoTitle,
                            item.completed && globalStyles.doneTodo,
                        ]}
                    >
                        {item.title}
                    </Text>
                    {item.description ? (
                        <Text style={globalStyles.todoDescription}>
                            {item.description}
                        </Text>
                    ) : null}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => toggleTodo(item.id)} style={{ marginRight: 10 }}>
                        <Ionicons
                            name={item.completed ? "checkmark-circle" : "radio-button-off"}
                            size={24}
                            color={item.completed ? "#4CAF50" : "#333"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                        <Ionicons name="trash" size={24} color="#F44336" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TodoItem;
