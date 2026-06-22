// ===== Firebase Configuration =====
// แก้ไขค่าด้านล่างด้วยข้อมูล Firebase Project ของคุณ
// ดูได้จาก Firebase Console > Project Settings > Your apps > Web

const firebaseConfig = {
    apiKey: "AIzaSyBUnxjIirdKBf9bUSXJr0KUebjLmwXBBHA",
    authDomain: "srtest-1c774.firebaseapp.com",
    projectId: "srtest-1c774",
    storageBucket: "srtest-1c774.firebasestorage.app",
    messagingSenderId: "171249788293",
    appId: "1:171249788293:web:afa4e247bda3c8e14bd0ec",
    measurementId: "G-ZJNHZJE5QS"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// ============================================================
// โครงสร้าง Firestore Collections:
//
// students/{studentId}
//   name, class, number, examType, subject
//
// exams/{examId}
//   round, examType, subject, date, isOpen, duration, description, maxScore
//
// questions/{questionId}
//   examId, order, text, type (choice/written), choices[], correctAnswer, maxScore
//
// submissions/{submissionId}
//   studentId, studentName, studentClass, examId, round, examType, subject,
//   answers{}, autoScore, writtenScores{}, totalScore, maxScore,
//   isGraded, submittedAt, timeTaken
//
// scores/{studentId}
//   studentName, class, examType, totalScore, examCount, lastUpdated
//
// config/teacher
//   password
// ============================================================
