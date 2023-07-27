export class TaskApi {
  static async getAll() {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "GET",
    });

    const data = response.json();
    return data;
  }

  static async create(taskData) {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    const data = response.json();
    return data;
  }

  static async delete(id) {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

    const data = response.json();
    return data;
  }

  static async getById(id) {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "GET",
    });

    const data = response.json();
    return data;
  }

  static async edit(id, taskData) {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    const data = response.json();
    return data;
  }
}
