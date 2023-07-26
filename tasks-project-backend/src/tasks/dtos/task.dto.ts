import { TaskPriority, TaskStatus } from './../tasks.entity';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class TaskCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TaskStatus)
  @IsNotEmpty()
  taskStatus: TaskStatus;

  @IsEnum(TaskPriority)
  @IsNotEmpty()
  taskPriority: TaskPriority;
}
