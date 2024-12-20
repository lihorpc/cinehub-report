// function loadLab(labNumber, taskNumber = 1) {
//     // Load content
//     const contentFrame = document.getElementById('content-frame');
//     const menuFrame = document.getElementById('menu-frame');
    
//     contentFrame.src = `labs/lab${labNumber}/task${taskNumber}.html`;
//     menuFrame.src = `labs/lab${labNumber}/menu.html`;

//     // Add event listener for messages from the menu frame
//     window.addEventListener('message', function(event) {
//         if (event.data.type === 'loadTask') {
//             contentFrame.src = `labs/lab${labNumber}/task${event.data.taskNumber}.html`;
//         }
//     });
// }

function loadContent(path) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'labs/lab1/task1.html');  // false makes it synchronous
    try {
        xhr.send();
        if (xhr.status === 200) {
            document.getElementById('content-container').innerHTML = xhr.response;
        } else {
            document.getElementById('content-container').innerHTML = '<p>Error loading content</p>';
        }
    } catch (error) {
        console.error('Error loading file:', error);
        document.getElementById('content-container').innerHTML = '<p>Error loading content</p>';
    }
}

document.querySelectorAll('.lab-link').forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // This makes the scroll animation smooth
        });
    });
});