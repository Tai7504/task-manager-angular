// Import Component decorator từ Angular core
import { Component } from '@angular/core';
// Import CommonModule chứa các directive cơ bản như *ngIf, *ngFor
import { CommonModule } from '@angular/common';
// Import FormsModule - cần thiết cho [(ngModel)]
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks', // Tên thẻ HTML để sử dụng component này
  standalone: true,      // Đánh dấu đây là standalone component
  imports: [
    CommonModule,  // Cho phép sử dụng *ngIf, *ngFor
    FormsModule    // Cho phép sử dụng ngModel - form binding
  ],
  templateUrl: './tasks.component.html', // Template HTML
  styleUrls: ['./tasks.component.scss']   // Styles SCSS
})
export class TasksComponent {
  // Mảng lưu danh sách các công việc - kiểu string[]
  tasks: string[] = [];

  // Biến lưu giá trị công việc mới đang nhập từ form
  newTask: string = '';

  // Vị trí công việc đang sửa (-1 nghĩa là không sửa công việc nào)
  editingIndex: number = -1;

  // Nội dung công việc đang sửa - dùng cho binding khi edit
  editingText: string = '';

  // Hàm thêm công việc mới - gọi khi click nút Thêm
  addTask(): void {
    // Kiểm tra nếu người dùng đã nhập gì chưa, loại bỏ khoảng trắng
    if (this.newTask.trim() !== '') {
      // Thêm công việc vào mảng tasks
      this.tasks.push(this.newTask);
      // Xóa nội dung ô nhập để chuẩn bị nhập mới
      this.newTask = '';
    }
  }

  // Hàm bắt đầu sửa một công việc - gọi khi click nút Sửa
  startEdit(index: number): void {
    // Lưu vị trí đang sửa vào biến editingIndex
    this.editingIndex = index;
    // Lưu nội dung đang sửa vào biến editingText
    this.editingText = this.tasks[index];
  }

  // Hàm lưu nội dung đã sửa - gọi khi click nút Lưu
  saveEdit(): void {
    // Kiểm tra nếu có đang sửa công việc nào không
    if (this.editingIndex >= 0) {
      // Lưu nội dung mới vào mảng tasks tại vị trí đang sửa
      this.tasks[this.editingIndex] = this.editingText;
      // Đặt lại trạng thái không sửa (editingIndex = -1)
      this.editingIndex = -1;
      // Xóa nội dung đang sửa
      this.editingText = '';
    }
  }

  // Hàm xóa một công việc - gọi khi click nút Xóa
  deleteTask(index: number): void {
    // Xóa một phần tử tại vị trí index từ mảng tasks
    // splice(vị_trí, số_phần_tử_xóa)
    this.tasks.splice(index, 1);
  }
}
