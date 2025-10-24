import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles';

const TodoDetails = ({ route, navigation }) => {
    const { todo } = route.params;

    return (
        <SafeAreaView style={globalStyles.container}>
            {Platform.OS === 'ios' && (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={[globalStyles.header, { marginLeft: 10 }]}>TODO DETAILS</Text>
                </View>
            )}

            <View style={globalStyles.todoItem}>
                <Text style={globalStyles.todoTitle}>{todo.title}</Text>
                {todo.description ? (
                    <Text style={globalStyles.todoDescription}>{todo.description}</Text>
                ) : null}
                <Text style={{ marginTop: 10, fontSize: 14, color: todo.completed ? '#4CAF50' : '#F44336' }}>
                    Status: {todo.completed ? 'Completed' : 'Active'}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default TodoDetails;
