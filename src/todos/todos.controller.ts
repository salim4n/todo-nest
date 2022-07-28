import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

// localhost:8080/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Get()
  findAll(): TodosService {
    return this.todosService;
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto) {
    console.log('newTodo', newTodo);
    this.todosService.create(newTodo);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todosService.update(id, todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
