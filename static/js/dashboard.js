// document.addEventListener('DOMContentLoaded', () => {
//     // DOM Elements
//     const audioDropZone = document.getElementById('audio-drop-zone');
//     const videoDropZone = document.getElementById('video-drop-zone');
//     const audioUploadInput = document.getElementById('audio-upload');
//     const videoUploadInput = document.getElementById('video-upload');
//     const ratingButtons = document.querySelectorAll('.rating-btn');
//     const sendReviewBtn = document.getElementById('send-review');
//     const logoutButton = document.getElementById('logout');
//     const navLinks = document.querySelectorAll('.nav-link');

//     /**
//      * Function to handle file upload and display the file name inside the drop zone
//      * @param {HTMLInputElement} input - The file input element
//      * @param {HTMLElement} dropZone - The drop zone element
//      * @param {string} type - The type of file (Audio or Video)
//      */
//     function handleFileUpload(input, dropZone, type) {
//         const file = input.files[0];
//         if (file) {
//             dropZone.innerHTML = `
//                 <p style="font-weight: bold;">${type} file uploaded: ${file.name}</p>
//             `;
//         }
//     }

//     /**
//      * Function to handle file drop and trigger file upload handling
//      * @param {DragEvent} event - The drag-and-drop event
//      * @param {HTMLInputElement} input - The file input element
//      * @param {HTMLElement} dropZone - The drop zone element
//      * @param {string} type - The type of file (Audio or Video)
//      */
//     function handleDrop(event, input, dropZone, type) {
//         event.preventDefault();
//         const file = event.dataTransfer.files[0];
//         if (file) {
//             // Assign dropped file to the input element and trigger a change event
//             input.files = event.dataTransfer.files;
//             handleFileUpload(input, dropZone, type);
//         }
//     }

//     /**
//      * Function to prevent default behavior on dragover
//      * @param {DragEvent} event - The dragover event
//      */
//     function handleDragOver(event) {
//         event.preventDefault();
//     }

//     // Audio drop zone events
//     audioDropZone.addEventListener('dragover', handleDragOver);
//     audioDropZone.addEventListener('drop', (event) =>
//         handleDrop(event, audioUploadInput, audioDropZone, 'Audio')
//     );
//     audioDropZone.addEventListener('click', () => audioUploadInput.click());

//     // Video drop zone events
//     videoDropZone.addEventListener('dragover', handleDragOver);
//     videoDropZone.addEventListener('drop', (event) =>
//         handleDrop(event, videoUploadInput, videoDropZone, 'Video')
//     );
//     videoDropZone.addEventListener('click', () => videoUploadInput.click());

//     // Input change events
//     audioUploadInput.addEventListener('change', () => {
//         handleFileUpload(audioUploadInput, audioDropZone, 'Audio');
//     });

//     videoUploadInput.addEventListener('change', () => {
//         handleFileUpload(videoUploadInput, videoDropZone, 'Video');
//     });

//     // Handle rating button selection
//     ratingButtons.forEach((button) => {
//         button.addEventListener('click', () => {
//             ratingButtons.forEach((btn) => btn.classList.remove('active'));
//             button.classList.add('active');
//         });
//     });

//     // Handle sending review
//     if (sendReviewBtn) {
//         sendReviewBtn.addEventListener('click', () => {
//             const selectedRating = document.querySelector('.rating-btn.active');
//             if (selectedRating) {
//                 alert(`Thank you for your feedback: ${selectedRating.dataset.rating}`);
//             } else {
//                 alert('Please select a rating before sending the review.');
//             }
//         });
//     }

//     // Handle logout functionality
//     if (logoutButton) {
//         logoutButton.addEventListener('click', () => {
//             // Clear user session data or cookies
//             // Redirect to login page
//             window.location.href = 'login.html';
//         });
//     }

//     // Handle navigation links
    
//     navLinks.forEach((link) => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             navLinks.forEach((l) => l.classList.remove('active'));
//             link.classList.add('active');

//             const page = link.textContent.trim();
//             switch (page) {
//                 case 'Dashboard':
//                     window.location.href = 'dashboard.html';
//                     break;
//                 case 'Settings':
//                     window.location.href = 'setting.html';
//                     break;
//                 default:
//                     break;
//             }
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const audioDropZone = document.getElementById('audio-drop-zone');
    const videoDropZone = document.getElementById('video-drop-zone');
    const audioUploadInput = document.getElementById('audio-upload');
    const videoUploadInput = document.getElementById('video-upload');
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const sendReviewBtn = document.getElementById('send-review');
    const logoutButton = document.getElementById('logout');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to handle file upload and display the file name inside the drop zone
    function handleFileUpload(input, dropZone, type) {
        const file = input.files[0];
        if (file) {
            dropZone.innerHTML = `
                <p style="font-weight: bold;">${type} file uploaded: ${file.name}</p>
            `;
        }
    }

    // Function to handle file drop and trigger file upload handling
    function handleDrop(event, input, dropZone, type) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            // Assign dropped file to the input element and trigger a change event
            input.files = event.dataTransfer.files;
            handleFileUpload(input, dropZone, type);
        }
    }

    // Function to prevent default behavior on dragover
    function handleDragOver(event) {
        event.preventDefault();
    }

    // **New Function for Previewing Files**
    function previewFile(file, dropZone) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.createElement('audio'); // Change to 'video' for video files
            preview.src = e.target.result;
            preview.controls = true;
            dropZone.innerHTML = ''; // Clear the current content
            dropZone.appendChild(preview);
        };
        reader.readAsDataURL(file);
    }

    // Audio drop zone events
    audioDropZone.addEventListener('dragover', handleDragOver);
    audioDropZone.addEventListener('drop', (event) =>
        handleDrop(event, audioUploadInput, audioDropZone, 'Audio')
    );
    audioDropZone.addEventListener('click', () => audioUploadInput.click());

    // Video drop zone events
    videoDropZone.addEventListener('dragover', handleDragOver);
    videoDropZone.addEventListener('drop', (event) =>
        handleDrop(event, videoUploadInput, videoDropZone, 'Video')
    );
    videoDropZone.addEventListener('click', () => videoUploadInput.click());

    // Input change events
    audioUploadInput.addEventListener('change', () => {
        const file = audioUploadInput.files[0];
        if (file) {
            handleFileUpload(audioUploadInput, audioDropZone, 'Audio');
            previewFile(file, audioDropZone); // Add preview for audio files
        }
    });

    videoUploadInput.addEventListener('change', () => {
        const file = videoUploadInput.files[0];
        if (file) {
            handleFileUpload(videoUploadInput, videoDropZone, 'Video');
            previewFile(file, videoDropZone); // Add preview for video files
        }
    });

    // Handle rating button selection
    ratingButtons.forEach((button) => {
        button.addEventListener('click', () => {
            ratingButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Handle sending review
    if (sendReviewBtn) {
        sendReviewBtn.addEventListener('click', () => {
            const selectedRating = document.querySelector('.rating-btn.active');
            if (selectedRating) {
                alert(`Thank you for your feedback: ${selectedRating.dataset.rating}`);
            } else {
                alert('Please select a rating before sending the review.');
            }
        });
    }

    // Handle logout functionality
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Clear user session data or cookies
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }

    // Handle navigation links
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');

            const page = link.textContent.trim();
            switch (page) {
                case 'Dashboard':
                    window.location.href = 'dashboard.html';
                    break;
                case 'Settings':
                    window.location.href = 'setting.html';
                    break;
                default:
                    break;
            }
        });
    });
});
