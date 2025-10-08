const getStoredApp = () => {
  const storedAppStr = localStorage.getItem("appList");
  if (storedAppStr) {
    const storedAppData = JSON.parse(storedAppStr);
    return storedAppData;
  } else {
    return [];
  }
};
const addToLocalStorage = (appsData) => {
  const storedAppData = getStoredApp();
  const exists = storedAppData.some((app) => app.id === appsData.id);
  if (!exists) {
    storedAppData.push(appsData);
    console.log(storedAppData);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("appList", data);
  }
};
const removeFromLocalStorage = (appsData) => {
  const storedAppData = getStoredApp();
  const updatedApps = storedAppData.filter((app) => app.id !== appsData.id);
  localStorage.setItem("appList", JSON.stringify(updatedApps));
};
export { addToLocalStorage, getStoredApp, removeFromLocalStorage };
