## 🗞 NewsFirst - Top Headlines Web App

*NewsFirst* is a responsive, modern web application that fetches and displays the latest news headlines using the [NewsAPI](https://newsapi.org/). Users can click on category tabs in the navbar (like Business, Entertainment, Science, etc.) to filter and view news relevant to their interests.

![NewsFirst Screenshot](./screenshot.jpg)

---

## 🚀 Features

- 📰 *Top Headlines* from trusted sources
- 🔍 *Category-Based Navigation* (e.g., Health, Sports, Technology, etc.)
- 🌐 Live fetching via *NewsAPI*
- 💻 *Responsive Design* (works on mobile and desktop)
- 🎨 Clean and intuitive UI

---

## 🛠 Tech Stack

- *Frontend:* HTML, CSS, JavaScript
- *Framework:* React.js
- *API:* [NewsAPI](https://newsapi.org/)
- *Styling:* Custom CSS (can be upgraded with Tailwind or Bootstrap)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/newsfirst.git
cd newsfirst
npm install
npm start
*Open your browser and navigate to:*
```bash
http://localhost:3000
```
---
## 🧪API Setup
1. **Visit NewsAPI.org**  
2. **Sign up and generate your API key**  
3. **Create a .env file in the root of your project:**
  ```bash
REACT_APP_NEWS_API_KEY=your_api_key_
```
4. **Restart the development server if it's running.**
---
## 📁 Folder Structure
```
newsfirst/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── NewsItem.js
│   ├── pages/
│   │   └── CategoryNews.js
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```
---
## 🧠 Future Improvements
- Add search functionality
- Implement pagination
- Save articles to local bookmarks
- Dark mode toggle 🌙
---
## 🙌 Credits
- News powered by NewsAPI
- Design inspiration from modern media websites
- Developed with ❤️ by [Reena]
---
## 📄 License
- This project is licensed under the MIT License.
---
