document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    const announcementDiv = document.createElement('div');
    announcementDiv.classList.add('announcement');
    announcementDiv.innerHTML = `<strong>${projectName}</strong><p>${projectDescription}</p>`;

    document.getElementById('announcements').appendChild(announcementDiv);

    // Очистка формы
    document.getElementById('postForm').reset();
});
