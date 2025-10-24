

import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles';

const TodoItem = ({ item, toggleTodo }) => {
    return (
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            <View style={globalStyles.todoItem}>
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
        </TouchableOpacity>
    );
};

export default TodoItem;
