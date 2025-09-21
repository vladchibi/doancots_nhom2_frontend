// Định nghĩa kiểu dữ liệu chung
interface Meta {
  total: number;
  pageNumber: number;
  limitNumber: number;
  totalPages: number;
}

interface Data<T> {
  data: T[];
  meta: Meta;
}

// Lớp chung cho các danh sách dữ liệu
class GenericResponse<T> {
  data: Data<T>;

  constructor(data: T[], meta: Meta) {
    this.data = {
      data: data, // Gán mảng dữ liệu vào thuộc tính data
      meta: meta, // Gán meta vào thuộc tính meta
    };
  }

  // Phương thức chung: Lấy số lượng phần tử trên trang
  getItemsPerPage(): number {
    return this.data.data.length; // Sử dụng this.data.data.length
  }

  // Phương thức chung: Kiểm tra có phải trang cuối không
  isLastPage(): boolean {
    return this.data.meta.pageNumber === this.data.meta.totalPages;
  }

  // Phương thức tùy chỉnh: Lấy phần tử đầu tiên
  getFirstItem(): T | undefined {
    return this.data.data[0]; // Sử dụng this.data.data[0]
  }
}