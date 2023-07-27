import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TaskCreateDto } from './dtos/task.dto';
import { Task } from './tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY') private taskRepository: Repository<Task>,
  ) {}

  getTasks() {
    return this.taskRepository.find();
  }

  getTaskById(id: string) {
    const task = this.taskRepository.findOne({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID: ${id} doesn't exist`);
    }

    return task;
  }

  createTask(body: TaskCreateDto) {
    return this.taskRepository.save(body);
  }

  deleteTask(id: string) {
    return this.taskRepository.softDelete(id);
  }
  async editTask(id: string, taskData) {
    const existingTask = await this.taskRepository.findOne({
      where: { id },
    });

    if (!existingTask) {
      return null;
    }

    existingTask.title = taskData.title;
    existingTask.description = taskData.description;
    existingTask.status = taskData.status;
    existingTask.priority = taskData.priority;

    return this.taskRepository.save(existingTask);
  }
}
