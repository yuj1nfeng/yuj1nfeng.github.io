// 搜索功能
const searchInput = document.getElementById('searchInput');
const templateGrid = document.getElementById('templateGrid');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = templateGrid.querySelectorAll('a, div.card-hover');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const badges = Array.from(card.querySelectorAll('span')).map(s => s.textContent.toLowerCase()).join(' ');

        if (title.includes(searchTerm) || desc.includes(searchTerm) || badges.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 回车搜索
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        // 添加搜索动画效果
        this.classList.add('ring-4', 'ring-white/50');
        setTimeout(() => {
            this.classList.remove('ring-4', 'ring-white/50');
        }, 300);
    }
});
