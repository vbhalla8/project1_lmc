document.getElementById('rules-btn').addEventListener('click', function() {
    toggleContent('rules-content');
});

document.getElementById('hand-btn').addEventListener('click', function() {
    toggleContent('hand-content');
});

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.classList.toggle('show');
}
