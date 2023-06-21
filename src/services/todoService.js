import axios from "axios";

class TodoService {
  constructor() {
    this.token = localStorage.getItem("vuetoken");
  }

  async addTodo(title, description, status, date, label) {
    const results = await axios.post(
      `https://todovueserver-bba87754e80e.herokuapp.com/addTodo`,
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

  async getTodosByUser() {
    const token = localStorage.getItem("vuetoken");
    const results = await axios.get(
      `https://todovueserver-bba87754e80e.herokuapp.com/getTodos`,
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
      `https://todovueserver-bba87754e80e.herokuapp.com/deleteTodo?id=${id}`
    );
    return results.data;
  }
}

export const todoService = new TodoService();




// import axios from "axios";

// class TodoService {
//   constructor() {
//     this.token = localStorage.getItem("vuetoken");
//   }

//   async addTodo(title, description, status, date, label) {
//     const results = await axios.post(
//       `http://127.0.0.1:3090/addTodo`,
//       {
//         title,
//         description,
//         status,
//         date,
//         label,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${this.token}`,
//         },
//       }
//     );
//     return results;
//   }

//   async getTodosByUser(status) {
//     const token = localStorage.getItem("vuetoken");
//     const results = await axios.get(
//       `http://127.0.0.1:3090/getTodos?status=${status}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return results.data;
//   }

//   async deleteTodo(id) {
//     const results = await axios.delete(
//       `http://127.0.0.1:3090/deleteTodo?id=${id}`
//     );
//     return results.data;
//   }
// }

// export const todoService = new TodoService();
