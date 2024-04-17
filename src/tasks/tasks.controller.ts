import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  helloWorld() {
    return this.tasksService.getAllTasks()
  }

  @Post()
  createTask(@Body() newTaks: CreateTaskDto) {
    return this.tasksService.createTask(newTaks.title, newTaks.description)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id)
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields)
  }
}
