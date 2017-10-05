const initialTodos = [
    {id: 1, title: "Do react", status: 0},
    {id: 2, title: "Do redux", status: 0},
    {id: 3, title: "Do JS", status: 1},
    {id: 4, title: "Do bootstrap", status: 0}
  ];

export default function todos(state = initialTodos, action) {
    return state;
}