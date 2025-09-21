/**
 * Định dạng giá tiền thành chuỗi với dấu phân cách hàng nghìn và đơn vị VNĐ
 * @param price Giá tiền (số nguyên hoặc số thập phân)
 * @param currency Đơn vị tiền tệ (mặc định là VNĐ)
 * @returns Chuỗi giá đã định dạng, ví dụ: "100.000 VNĐ"
 */
export default function formatPrice(price: number, currency: string = "VNĐ"): string {
  // Kiểm tra giá trị hợp lệ
  if (isNaN(price) || price == null) {
    return `0 ${currency}`;
  }

  // Làm tròn đến 2 chữ số thập phân nếu cần
  const roundedPrice = Math.round(price * 100) / 100;

  // Chuyển thành chuỗi với dấu chấm phân cách hàng nghìn
  const formattedPrice = roundedPrice.toLocaleString("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return `${formattedPrice} ${currency}`;
}