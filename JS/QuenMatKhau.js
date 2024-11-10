
// lỗi khi không nhập password
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    
    // Regular expression to check for a Gmail address
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email === "") {
        emailError.style.display = 'block';
        emailError.textContent = "Nhập email của bạn";
    } else if (!gmailPattern.test(email)) {
        emailError.style.display = 'block';
        emailError.textContent = "Email này không tồn tại hoặc không phải là Gmail";
    } else {
        emailError.style.display = 'none';
        showOtpVerification();
    }
}




// Đổi trang
function showOtpVerification() {
    const email = document.getElementById('email').value;
    document.querySelectorAll('.otp-email').forEach(element => {
        element.innerText = email;
    });
    document.getElementById('password-recovery').style.display = 'none';
    document.getElementById('otp-verification').style.display = 'block';
}

function goBackToRecovery() {
    document.getElementById('password-recovery').style.display = 'block';
    document.getElementById('otp-verification').style.display = 'none';
}




function confirmOtp() {
    const otpError = document.getElementById('otp-error');
    let otpCode = "";
    for (let i = 1; i <= 6; i++) {
        const otpInput = document.getElementById(`otp-${i}`);
        
        if (otpInput.value === "") {
            otpError.style.display = 'block';
            otpError.textContent = "Bạn cần nhập đầy đủ mã OTP.";
            return;
        }
        
        otpCode += otpInput.value;
    }
    otpError.style.display = 'none';
    document.getElementById('otp-verification').style.display = 'none';
    document.getElementById('new-password').style.display = 'block';
}

function goBackToOtp() {
    document.getElementById('otp-verification').style.display = 'block';
    document.getElementById('new-password').style.display = 'none';
}




// Hiện thị mật khẩu sang text 
const togglePasswordButton = document.getElementById('toggle-password');
const newPasswordInput = document.getElementById('new-password-input');

togglePasswordButton.addEventListener('click', function() {
    const type = newPasswordInput.type === 'password' ? 'text' : 'password';
    newPasswordInput.type = type;

    // Cập nhật biểu tượng
    this.querySelector('#eye-icon').classList.toggle('fa-eye');
    this.querySelector('#eye-icon').classList.toggle('fa-eye-slash');
});






// Nhập mật khẩu đúng với theo 3 yêu cầu 
function confirmNewPassword() {
    const newPassword = newPasswordInput.value;
    const lengthRequirement = document.getElementById('length-requirement');
    const characterRequirement = document.getElementById('character-requirement');
    const allowedCharacters = document.getElementById('allowed-characters');

    // Biểu thức chính quy để xác thực mật khẩu
    const lengthPattern = /^.{8,20}$/; // Độ dài từ 8-20 ký tự
    const characterPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~.!@#$%^&*<>])/; // Chứa chữ cái, số và ký tự đặc biệt

    // Kiểm tra độ dài
    if (lengthPattern.test(newPassword)) {
        lengthRequirement.style.color = 'green'; // Đúng yêu cầu
    } else {
        lengthRequirement.style.color = 'red'; // Không đúng yêu cầu
    }

    // Kiểm tra ký tự
    if (characterPattern.test(newPassword)) {
        characterRequirement.style.color = 'green'; // Đúng yêu cầu
    } else {
        characterRequirement.style.color = 'red'; // Không đúng yêu cầu
    }

    // Kiểm tra tất cả các điều kiện
    if (lengthPattern.test(newPassword) && characterPattern.test(newPassword)) {
        allowedCharacters.style.color = 'green'; // Đúng yêu cầu
    } else {
        allowedCharacters.style.color = 'red'; // Không đúng yêu cầu
    }
}


function moveToNextBox(currentBox) {
    const currentInput = document.getElementById(`otp-${currentBox}`);
    const nextBox = currentBox + 1;
    const nextInput = document.getElementById(`otp-${nextBox}`);

    // Move to the next input box if the current box is filled and there is a next box
    if (currentInput.value.length === 1 && nextInput) {
        nextInput.focus();
    }
    
    // Handle backspace to move focus to the previous box
    currentInput.addEventListener('keydown', function(event) {
        if (event.key === "Backspace" && currentBox > 1 && currentInput.value === '') {
            const previousInput = document.getElementById(`otp-${currentBox - 1}`);
            previousInput.focus();
        }
    });
}


//Chuyển đổi hình ảnh
let images = [
    "img/turntable-top-view-audio-equipment-159376.jpeg",
    "img/pexels-photo-341523.webp"
    
];
let currentIndex = 0;

function showImage(index) {
    const img = document.getElementById("slide");
    img.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Auto slide every 5 seconds
setInterval(nextImage, 10000);