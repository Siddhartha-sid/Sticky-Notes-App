# 🗒️ Sticky Notes App

A clean, minimal sticky notes application built with React.js.
Add color-coded notes, search through them instantly, and delete
when done — all managed with React hooks.



---

## ✨ Features

- ➕ Add notes with title and details
- 🎨 6 color themes per note
- 🔍 Real-time search across title and details
- 🗑️ Delete any note instantly
- 🕐 Timestamp on every note
- 📝 Character count on title input
- ✅ Toast notification on note creation
- 💨 Smooth pop-in animation on new notes
- 🚫 Validation — empty title blocked

---

## 🛠️ Tech Stack

| Technology   | Usage                          |
|--------------|--------------------------------|
| React.js     | UI & component architecture    |
| React Hooks  | useState for all state logic   |
| Tailwind CSS | Styling & layout               |
| Vite         | Build tool & dev server        |
| Lucide React | Icons (X button)               |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Siddhartha-sid/Sticky-Notes-App.git
cd sticky-notes-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── App.jsx          # Main component — all state and logic lives here
├── main.jsx         # React entry point
└── index.css        # Global styles
```

---

## 🧠 How It Works

```
User fills title + details
        ↓
Picks a note color (6 options)
        ↓
Clicks "Add Note"
        ↓
Note pushed to notes[] array via useState
        ↓
Notes grid re-renders with new card
        ↓
User can search or delete any note
```

---

## 💡 Key React Concepts Used

- `useState` — manages notes array, form inputs, filter query
- Controlled components — all inputs tied to state
- Array immutability — spread operator for safe state updates
- `.filter()` — live search without external library
- Conditional rendering — empty state, search results

---

## 🔮 Future Improvements

- [ ] LocalStorage persistence — notes survive page refresh
- [ ] Edit existing notes
- [ ] Drag and drop to reorder
- [ ] Pin important notes to top
- [ ] Dark mode toggle
- [ ] Backend with Node.js + MongoDB for multi-device sync

---

## 👨‍💻 Author

**Chalamala Siddhartha**  
[GitHub](https://github.com/yourusername) ·
[LinkedIn](https://linkedin.com/in/yourprofile) ·
[Portfolio](https://your-portfolio.vercel.app)

---

## 📄 License

MIT License — free to use and modify