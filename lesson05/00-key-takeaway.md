Buổi 5: DOM + Playwright + Function nâng cao
I. JavaScript - Functions nâng cao
1. Function Expression
Gán function vào biến

const sayHello = function() {
  console.log("Hello");
};

dùng khi muốn lưu function như 1 biến dễ truyền qua chỗ khác
2. Arrow Function (Lambda)  khuyên dùng

viết ngắn gọn hơn

const sayHello = () => {
  console.log("Hello");
};

const sum = (a, b) => a + b;
3. Anonymous Function (hàm ẩn danh)

không có tên, dùng 1 lần

setTimeout(function() {
  console.log("Run after 1s");
}, 1000);

thường dùng:

callback
event
test

II. DOM (Document Object Model)
DOM là cấu trúc của trang web dạng cây

document
 └── html
      ├── head
      └── body
           ├── h1
           ├── img
           └── a
Thành phần
Node
mỗi phần tử trên web text image button link

Element (thẻ)
<a href="...">Add to cart</a>
thẻ mở: <a>
thẻ đóng: </a>
Attribute
data-product_id="1232"
class="button"

dùng để select element

III. Selector 
1. XPath
//a[@data-product_id="1232"]

2. CSS Selector 
[data-product_id="1232"]

3. Playwright Selector

page.getByText("Add to cart")
page.getByRole('link', { name: 'Add to cart' })

IV. Playwright Basic Syntax
1. Navigate (mở trang)
await page.goto("https://example.com");
2. Click
await page.click('[data-product_id="1232"]');
3. Radio / Checkbox
await page.check('#male');
await page.uncheck('#subscribe');
4. Select (dropdown)
await page.selectOption('#country', 'vn');