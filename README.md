# 3D Product Website - Technical Assessment (Optional Part)

This project was created to fulfill the optional "3D website in React Three Fibre" requirement of the Fullstack Developer Intern technical assessment for Instinctive Studio.

### **Live Demo**

[**3D Website**](https://secure-sight-3d.vercel.app/)

---

### **Deployment Instructions**

To run this project on your local machine, please follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone [YOUR_3D_SITE_GITHUB_REPO_URL]
    cd secure-sight-3d
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Application**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3001` (or the next available port).

---

### **Technical Decisions**

*   **Separate Project:** I chose to build this as a separate project to follow best architectural practices. This ensures a clean separation of concerns, keeps dependencies isolated (the main dashboard doesn't need the large `three.js` library), and allows for independent deployment.
*   **React Three Fiber (R3F):** I selected R3F over vanilla Three.js because its declarative, component-based syntax integrates seamlessly into the React ecosystem. This makes building and managing complex 3D scenes more maintainable and scalable.
*   **3D Asset Pipeline:** The provided `.blend` source file was exported to the web-optimized `.glb` format. I then used the `gltfjsx` tool to automatically convert this asset into a reusable React component, which is a standard and efficient professional workflow.
*   **Custom Lighting:** To match the dramatic, high-contrast look of the Figma design, I opted for a custom multi-point lighting setup (using `ambientLight` and `directionalLight`) rather than relying on generic environment lighting.

---

### **If I Had More Time…**

*   **Scroll-Based Animations:** I would use a library like GSAP to create scroll-triggered animations, allowing the camera to move and the annotations to fade in as the user scrolls, creating a more dynamic storytelling experience.
*   **Interactive Hotspots:** I would add clickable hotspots directly on the 3D model that, when clicked, would highlight a specific feature and display more detailed information.
*   **Performance Optimization:** I would further optimize the 3D model by compressing its textures using a tool like `gltf-transform` to ensure the fastest possible load times for all users.
*   **UI Animations:** I would add subtle fade-in and transition effects to the HTML annotation elements to make their appearance on screen smoother.
