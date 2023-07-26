import { Inject, Injectable } from '@nestjs/common';
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

  createTask(body: TaskCreateDto) {
    return this.taskRepository.save(body);
  }
}
