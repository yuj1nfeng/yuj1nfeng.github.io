document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('successModal').classList.remove('hidden');
});

function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
}
