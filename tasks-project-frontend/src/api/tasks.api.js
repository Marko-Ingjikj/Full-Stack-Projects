export class TaskApi {
  static async getAll() {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "GET",
    });

    const data = response.json();
    return data;
  }
}
