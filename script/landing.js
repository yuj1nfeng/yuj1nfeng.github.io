document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.textContent = '提交中...';
    submitBtn.disabled = true;

    setTimeout(() => {
        document.getElementById('formContainer').classList.add('hide');
        document.getElementById('successPage').classList.add('show');
        localStorage.setItem('contact_' + Date.now(), JSON.stringify(data));
    }, 1000);
});
