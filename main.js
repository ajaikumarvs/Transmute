const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    // Create a new browser window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // or false, depending on your setup
        },
        autoHideMenuBar: true,  // This hides the menu bar by default
        titleBarStyle: 'hidden', // Optional: hides the title bar for a cleaner look
    });

    // Load your index.html or entry file
    mainWindow.loadFile('index.html');

    // Open the DevTools if you want during development (optional)
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit the app when all windows are closed (for macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
