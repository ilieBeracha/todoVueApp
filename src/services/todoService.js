import axios from "axios";

class TodoService {
  constructor() {
    this.token = localStorage.getItem("vuetoken");
  }

  async addTodo(title, description, status, date, label) {
    const results = await axios.post(
      `${import.meta.env.VITE_VUE_APP_BASE_URL}/addTodo`,
      {
        title,
        description,
        status,
        date,
        label,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    return results;
  }

  async getTodosByUser(status) {
    const token = localStorage.getItem("vuetoken");
    const results = await axios.get(
      `${import.meta.env.VITE_VUE_APP_BASE_URL}/getTodos?status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return results.data;
  }

  async deleteTodo(id) {
    const results = await axios.delete(
      `${import.meta.env.VITE_VUE_APP_BASE_URL}/deleteTodo?id=${id}`
    );
    return results.data;
  }
}

export const todoService = new TodoService();
