import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 10,
    },
    filterTab: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    activeFilterTab: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
    },
    filterTabText: {
        color: '#333',
        fontWeight: 'bold',
    },
    activeFilterTabText: {
        color: 'white',
    },
    todoItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    todoDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    noTodosText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#999',
    }
});