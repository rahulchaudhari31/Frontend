# 🎓 Smart Result Analysis System

**Smart Result Analysis System** is an advanced web application designed for educational institutions to automate the extraction, analysis, and storage of student examination results.

It transforms static PDF marksheets into dynamic, interactive dashboards, allowing teachers to track batch performance and students to visualize their academic growth over time.

---

## 🧠 How It Works (The Logic)

Here is the simplified logic behind the core features so anyone can understand how the code functions.

### 1. 📄 The "Reading" Algorithm (PDF Parsing)

Imagine reading a long receipt. The computer reads the PDF file line by line using **PyPDF2**.

- **Segmentation:** The code looks for the keyword `"SEAT NO.:"`. Every time it finds this word, it knows a new student's record is starting. It cuts the text into blocks, one for each student.
- **Extraction (Regex):** Inside each student's block, the code uses Regular Expressions (pattern matching) to find specific data:
  - Find a pattern like `"722..."` → That's the PRN.
  - Find a number after `"SGPA :"` → That's the Result.
  - Find lines with course codes (e.g., `"210242"`) → These are Subjects.

### 2. 🔮 The "Prediction" Algorithm (AI)

We use a mathematical concept called **Linear Regression** (via scikit-learn).

- **Logic:** If a student scored 7.0 in Sem 1, 7.5 in Sem 2, and 8.0 in Sem 3, the algorithm draws a straight line through these points to guess where the next point (Sem 4) will land.
- **Goal:** To give students an estimated target for their next exam based on their current trajectory.

### 3. ☁️ The "Memory" System (Cloud Storage)

We don't just show the data; we save it to **Google Firebase**.

- **Structure:** We store data in a NoSQL format (like a giant JSON file).
- **Linking:** When you upload a new file, the system checks the PRN. If that PRN already exists in the database from a previous exam, the system links the new result to that student's history, creating a complete timeline.

---

## 📂 Project Structure

The code is modular (split into different files) to make it easy to manage.

| File Name | Description |
|-----------|-------------|
| `app.py` | The Main Entry Point. Sets up the page layout and directs users to the Login page or Dashboard based on their status. |
| `analyzer.py` | The Brain. Contains the logic to read PDFs, extract student data, and perform AI predictions. |
| `firebase_manager.py` | The Connector. Handles all communication with Google Firebase (Login, Save Data, Fetch Data). |
| `dashboards.py` | The UI Logic. Defines what the Teacher sees (Upload, Analytics) vs. what the Student sees (Personal History). |
| `ui_renderers.py` | The Visuals. Contains code for the charts (Plotly), profile cards, and tables. |
| `auth.py` | The Gatekeeper. Manages the Login and Registration forms. |
| `styles.py` | The Look. Contains Custom CSS to make the app look modern (Glassmorphism effects). |
| `utils.py` | Helpers. Functions to export data to Excel files. |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Streamlit** | Frontend (Python-based UI framework) |
| **Python 3.9+** | Language |
| **Google Firebase Firestore** | Database (NoSQL Cloud DB) |
| **Firebase Auth** | Authentication (Email/Password) |
| **Pandas** | Data Tables |
| **PyPDF2** | PDF Reading |
| **Regex** | Pattern Matching |
| **Plotly** | Interactive Charts |
| **Scikit-Learn** | Linear Regression for predictions |

---

## 🚀 Installation and Setup Guide

### Prerequisites

Before proceeding, ensure your system meets the following requirements:

- Python 3.8 or higher installed on your machine.
- A Google Firebase Project with Firestore and Authentication enabled.
- A stable internet connection for installing dependencies.

### 1. Clone the Repository

```bash
git clone https://github.com/rahulchaudhari31/Smart-Result-Analysis-System-.git
cd Smart-Result-Analysis-System-
```

### 2. Create a Virtual Environment (Recommended)

Isolate project dependencies to avoid conflicts with other Python projects.

```bash
python -m venv venv
```

Activate the virtual environment:

**Windows:**
```bash
venv\Scripts\activate
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

Install all required Python libraries:

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing, manually install the core packages:

```bash
pip install streamlit pandas PyPDF2 plotly requests scikit-learn xlsxwriter
```

### 4. Configure Firebase Credentials

The application requires Firebase credentials to authenticate users and interact with Firestore. These values are not committed to version control for security reasons.

1. Create a new file named `firebase_config.py` in the root project directory.
2. Add your Firebase Web App configuration in the following format:

```python
# firebase_config.py
FIREBASE_CONFIG = {
    "apiKey": "YOUR_API_KEY",
    "authDomain": "YOUR_PROJECT.firebaseapp.com",
    "projectId": "YOUR_PROJECT_ID",
    "storageBucket": "YOUR_PROJECT.firebasestorage.app",
    "messagingSenderId": "YOUR_SENDER_ID",
    "appId": "YOUR_APP_ID",
    "measurementId": "YOUR_MEASUREMENT_ID"
}
```

To get these values, go to the **Firebase Console → Project Settings → General → Your Apps → Web App → Config**.

### 5. Run the Application

Start the Streamlit development server:

```bash
streamlit run app.py
```

The application will open in your default web browser at `http://localhost:8501`.

---

## 🌟 Features Breakdown

### 👨‍🏫 For Teachers

- **Upload & Analyze:** Upload a PDF marksheet. Get instant stats: Pass %, Average SGPA, Failure Count. View "Critical Subjects" (subjects where most students failed).
- **Global Search:** Search for any student by Name or PRN across all uploaded exams. See their complete history in one place.
- **Cloud Sync:** Save analyzed data to the cloud with one click. Access saved reports anytime from the "Saved" tab.

### 👨‍🎓 For Students

- **Personal Dashboard:** Login to view your specific results. See a graph of your SGPA growth.
- **AI Prediction:** The system predicts your next SGPA based on your past performance trend.
- **Downloadable Reports:** Download your history or specific semester results as Excel files.

---

## 📊 Database Schema (Firestore)

The app uses two main collections in Firebase:

### 1. `users` Collection

Stores user profiles (Email, Role, Name).

### 2. `result_files` Collection

Stores the parsed data from every PDF uploaded.

**Fields:**
- `exam_tag`: e.g., `"SE Computer 2024"`
- `students_data`: A huge array containing every student's marks from that PDF.
- `summary`: Pre-calculated stats (Avg SGPA, Pass Rate).

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

**Developed by Sakshi, Rahul, Sakshi** | Smart Result Analysis System
