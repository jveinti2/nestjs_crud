import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './task.entity'
import { UpdateTaskDto } from './dto/task.dto'
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.PENDING,
    },
  ]

  getAllTasks() {
    return this.tasks
  }
  createTask(title: string, description: string) {
    const newTask = {
      id: new Date().toISOString(),
      title,
      description,
      status: TaskStatus.PENDING,
    }

    this.tasks.push(newTask)
  }
  deleteTask(id: string) {
    this.tasks = this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id)
  }
  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id)
    const newTask = Object.assign(task, updatedFields)
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task))
    return newTask
  }
}
