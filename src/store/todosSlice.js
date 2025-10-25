import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
    try {
        const storedTodos = await AsyncStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
        console.error('Error loading todos:', error);
        return [];
    }
});

export const saveTodos = createAsyncThunk('todos/saveTodos', async (todos) => {
    try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    } catch (error) {
        console.error('Error saving todos:', error);
        throw error;
    }
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.unshift(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(loadTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(saveTodos.fulfilled, (state, action) => {
            });
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
