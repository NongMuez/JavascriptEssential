let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // ตั้วค่าข้อความทดสอบ
    document.getElementById("inputText").value = testText;

    //รีเซ็ทข้อมูลที่ผู้ใช้ป้อน
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerText = "";

    //เริ่มจับเวลา
    startTime = new Date().getTime();
}

 function endTest() {
            endTime = new Date().getTime();

            // ปิดการป้อนข้อมูลของผู้ใช้
            document.getElementById("userInput").readOnly = true;

            // คำนวณเวลาที่ใช้ไปและจำนวนคำต่อนาที (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // เป็นวินาที
            var userTypedText = document.getElementById("userInput").value;

            // แยกข้อความโดยใช้ regex เพื่อนับจำนวนคำอย่างถูกต้อง
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var typedLength = userTypedText.length;

            var wpm = 0; // ค่าเริ่มต้น

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // แสดงผลลัพธ์
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>ผลการทดสอบการพิมพ์:</h2>" +
                "<p>จำนวนที่พิมพ์: " + typedLength + " ตัวอักษร</p>" +
                "<p>จำนวนคำที่พิมพ์: " + typedWords + "</p>" +
                "<p>เวลาที่ใช้ไป: " + timeElapsed.toFixed(2) + " วินาที</p>" +
                "<p>จำนวนคำต่อนาที (WPM): " + wpm + "</p>";
            }
