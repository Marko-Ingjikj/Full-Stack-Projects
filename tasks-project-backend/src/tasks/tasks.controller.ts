import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskCreateDto } from './dtos/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() body: TaskCreateDto) {
    return this.taskService.createTask(body);
  }
}
