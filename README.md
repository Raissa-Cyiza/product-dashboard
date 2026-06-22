# Inventory Product Explorer Dashboard

A responsive, dynamic catalog application built with modular vanilla JavaScript. It fetches live product inventory, transforms data payloads on the fly, and features a real-time instant filter search interface.

## 🚀 Features
* **Live API Data Fetching:** Utilizes asynchronous JavaScript (`async/await`) to securely load product datasets.
* **Instant Filtering:** Evaluates user keystrokes in real-time to subset products dynamically.
* **Responsive Layout:** Uses CSS Grid to adjust from mobile viewports up to large desktop monitors seamlessly.
* **Clean Focus Outlines:** Optimized interactive user experiences across input fields.

## 🌐 API Used
* **API Engine:** [DummyJSON Products API](https://dummyjson.com/)
* **Data Transformed:** Maps fields directly into an internal data layer architecture (`name`, `flag` image, `population` price, `region` category, `capital` brand) for continuous UI scaling.

## 🛠️ How to Run Locally
1. Clone this repository or download the source folder.
2. Open the directory inside an IDE like Visual Studio Code.
3. Launch your local tracking engine (e.g., click **Go Live** using the VS Code Live Server extension).
4. Open `http://127.0.0.1:5500` in your web browser.