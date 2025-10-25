import React from 'react';
import { View, Text, FlatList, SafeAreaView, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { globalStyles } from '../styles';
import TodoItem from '../components/TodoItem';
import { toggleTodo, deleteTodo, saveTodos } from '../store/todosSlice';

const Completed = ({ navigation }) => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    // Function to toggle the completion status
    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        dispatch(saveTodos(updatedTodos));
    };

    // Function to delete a todo
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        const updatedTodos = todos.filter(todo => todo.id !== id);
        dispatch(saveTodos(updatedTodos));
    };

    // Function to navigate to details
    const goToDetails = (item) => {
        navigation.navigate('TodoDetails', { todo: item });
    };

    const completedTodos = todos ? todos.filter(todo => todo.completed) : [];

    const renderTodoItem = ({ item }) => (
        <TodoItem item={item} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} goToDetails={goToDetails} />
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Text style={globalStyles.header}>COMPLETED TODOS</Text>
            </View>

            <FlatList
                style={{ width: '90%', flex: 1 }}
                data={completedTodos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTodoItem}
                ListEmptyComponent={
                    <Text style={globalStyles.noTodosText}>
                        No completed todos to display.
                    </Text>
                }
            />
        </SafeAreaView>
    );
};

export default Completed;
