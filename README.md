<h1 align="center">AI-Powered Python Tutor 🎓🐍</h1>

## **📌 About the Project
The AI-Powered Python Tutor is an interactive web application designed to help children learn Python programming in a fun and engaging way. The AI-powered tutor provides real-time guidance, interactive lessons, and hands-on exercises to make learning intuitive and enjoyable.

Built with React.js for the frontend and Node.js + Express.js for the backend, this project integrates AI Chat APIs (OpenAI, Gemini, or a self-hosted model) to create an intelligent and child-friendly learning assistant.

---

## Screenshots

### Home Page
![Home Page](/frontend/public/welcome.png)

### ## 🎉 Live Demo

Check out the live applications:
-AI-Powered Python Tutor: https://skc-kaziazahar-tutordemo.onrender.com
### Cart Page
![Chat Page](/frontend/public/chatpage.png)


## **✨Features**  

### **🤖 AI-Powered Interactive Learning**  
✅ **AI Tutor**: Provides real-time explanations and guidance on Python concepts.  
✅ **Child-Friendly UI**: A visually appealing and engaging interface for young learners.  
✅ **Voice Support (Bonus Feature)**: Allows children to listen to responses instead of reading.  

### **📚 Structured Python Lessons**  
✅ **Step-by-Step Learning**: Interactive lessons covering Python basics.  
✅ **Live Coding Environment**: Lets children write and test Python code in the browser.  


### **🎭 Customizable AI Tutor Characters (Bonus Feature)**  
✅ **Pick Your Tutor**: Children can choose their AI tutor's avatar and personality.  


### **📌 API Integration**  
🔗 **AI Chat API**: Supports OpenAI, Gemini, or self-hosted models.  
🔗 **Secure API Key Configuration**: Allows users to set their own API keys to avoid quota issues.  

---

## **🛠 Tech Stack**  

| Technology       | Purpose                          |
|-----------------|--------------------------------|
| **React.js**    | Frontend framework             |
| **Node.js**     | Backend server                 |
| **Express.js**  | API handling                   |
| **Gemini API**  | AI-powered responses           |
| **MongoDB**     | User progress tracking (optional) |
| **Vercel/Netlify** | Frontend hosting          |
| **Render/Railway** | Backend hosting           |

---

## **📂 Folder Structure**  

```
📁 AI-Python-Tutor
 ├── 📁 frontend (React)
 │   ├── 📁 src
 │   │   ├── 📁 components
 │   │   │   ├── 📄 ChatBox.js  (Main chat UI)
 │   │   │   ├── 📄 InputBox.js  (User input field)
 │   │   │   ├── 📄 TutorCharacter.js (AI Tutor Avatar)
 │   │   │   ├── 📄 LessonPrompt.js (Interactive Python lessons)
 │   │   ├── 📄 App.js
 │   │   ├── 📄 index.js
 │   ├── 📄 package.json
 │   ├── 📄 vite.config.js
 │   ├── 📄 tailwind.config.js
 │   ├── 📄 .env (Store API keys)
 ├── 📁 backend (Node.js + Express)
 │   ├── 📁 routes
 │   │   ├── 📄 aiRoutes.js  (Handles AI responses)
 │   ├── 📁 config
 │   │   ├── 📄 db.js
 │   ├── 📁 controllers
 │   │   ├── 📄 aiController.js (Logic for API calls)
 │   ├── 📄 server.js
 │   ├── 📄 package.json
 │   ├── 📄 .env (Store API keys)
 ├── 📄 README.md
```

---

## **🚀 Project Setup**  

### **📌 Prerequisites**  
Before running the project, ensure you have:  
✔️ Node.js (>= 16.x)  
✔️ MongoDB (if using a database)  
✔️ API key for OpenAI/Gemini  

### **1️⃣ Clone the Repository**  
```
git clone https://github.com/KAZI-AZAHAR-UDDIN/AI-Python-Tutor.git
cd AI-Python-Tutor
```

### **2️⃣ Backend Setup**  
```
cd backend
npm install
cp .env.example .env  # Add your API key in the .env file
node server.js  # Start backend
```

### **3️⃣ Frontend Setup**  
```
cd frontend
npm install
npm run dev  # Start frontend
```

---

## **📡 API Endpoints**  

### **🎓 AI Tutor**  
| Method | Endpoint       | Description                          |
|--------|---------------|--------------------------------------|
| POST   | `/chat`     | Sends user queries to AI for a response |

### **📚 Lessons**  
| Method | Endpoint       | Description                         |
|--------|---------------|-------------------------------------|
| POST    | `/update-api-key`    | Update Api key while API key runs out of quota  |

---


# **AI-Powered Python Tutor – Dynamic API Key Setup**  

Welcome to the **AI-Powered Python Tutor!** This application helps children learn basic Python concepts interactively with the power of **Google Gemini AI**.  

If you are facing issues where the AI is not responding, it may be due to **API key limits**. Don’t worry! You can **add your own API key** by following these steps.  

---

## **📌 How to Configure Your Own API Key?**  

### **Step 1: Get Your Google Gemini API Key**  
1. Go to **[Google AI Studio](https://aistudio.google.com/)**.  
2. Sign in with your **Google account**.  
3. Navigate to the **API Keys** section.  
4. Click on **Create API Key** and copy the generated key.  

---

### **Step 2: Open the API Key Settings in the App**  
1. **Launch the Python Tutor App** in your browser.  
2. Click on **Settings (⚙️) or "Configure API Key"** in the navigation bar.  

---

### **Step 3: Enter and Save Your API Key**  
1. **Paste the copied API key** into the input field.  
2. Click the **"Save API Key"** button.  
3. You will see a confirmation message: ✅ *"API Key saved successfully!"*  

✅ Now, the AI tutor will use your **custom API key** instead of the default one.  

---

### **Step 4: Start Learning Python!**  
- Ask the AI tutor any Python-related question.  
- If you still face issues, check that your API key is **valid and active**.  
- You can update or change the API key anytime by repeating the above steps.  

---

## **❓ Troubleshooting Issues**  
### 🔴 *Problem:* "AI is not responding"  
✔️ **Solution:** Check if your API key is correctly entered and not expired.  

### 🔴 *Problem:* "Invalid API Key"  
✔️ **Solution:** Ensure you copied the **entire** API key without spaces.  

### 🔴 *Problem:* "Exceeded API Usage Limit"  
✔️ **Solution:** Generate a **new API key** from Google AI Studio.  

---

Now you're all set! 🚀 **Enjoy learning Python with AI-powered guidance!** 🐍
---

## **🌟 Future Enhancements**  
✅ **Quiz & Challenges**: Interactive Python quizzes after lessons.  
✅ **Live Coding Feedback**: AI evaluates and corrects Python code.  
✅ **Multi-language Support**: Add more programming languages.  

---

## **👨‍💻 Author**  
👤 **Kazi Azahar Uddin**  
🎯 Full-Stack Developer | Open to Work  

📧 Email: [kazirimo123@gmail.com](mailto:kazirimo123@gmail.com)  
📂 GitHub: [KAZI-AZAHAR-UDDIN](https://github.com/KAZI-AZAHAR-UDDIN)  
🌐 LinkedIn: [Kazi Azahar Uddin](https://www.linkedin.com/in/kazi-azahar-uddin-8b879b205/)  

---

## **📜 License**  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.