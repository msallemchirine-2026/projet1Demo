// 1. تحديد العناصر الأساسية من الصفحة
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
const likeButtons = document.querySelectorAll('.fa-heart');
const totalTag = document.querySelector('.total');

// 2. دالة لحساب وتحديث السعر الإجمالي
function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
    });
    
    totalTag.textContent = total + ' $';
}

// 3. تفعيل أزرار زيادة الكمية (+)
plusButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        let quantityTag = btn.nextElementSibling;
        let quantity = parseInt(quantityTag.textContent);
        quantity++;
        quantityTag.textContent = quantity;
        updateTotal();
    });
});

// 4. تفعيل أزرار نقصان الكمية (-)
minusButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        let quantityTag = btn.previousElementSibling;
        let quantity = parseInt(quantityTag.textContent);
        if (quantity > 0) {
            quantity--;
            quantityTag.textContent = quantity;
            updateTotal();
        }
    });
});

// 5. تفعيل أزرار الحذف (سلة المهملات)
deleteButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // حذف بطاقة المنتج بالكامل من الصفحة
        const card = btn.closest('.card');
        card.remove();
        updateTotal();
    });
});

// 6. تفعيل زر الإعجاب (القلب) لتغيير اللون
likeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // تغيير لون القلب عند الضغط عليه (تبديل كلاس اللون الأحمر)
        btn.classList.toggle('active');
        if (btn.style.color === 'red') {
            btn.style.color = 'black';
        } else {
            btn.style.color = 'red';
        }
    });
});