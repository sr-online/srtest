// ===== Firebase Configuration =====
// แก้ไขค่าด้านล่างด้วยข้อมูล Firebase Project ของคุณ
// ดูได้จาก Firebase Console > Project Settings > Your apps > Web

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
