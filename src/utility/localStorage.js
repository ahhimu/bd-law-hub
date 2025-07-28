import { toast } from "react-toastify";
const getStoredData = () => {
  const storedDataSTR = localStorage.getItem('storedData');
  if (storedDataSTR) {
    try {
      const storedData = JSON.parse(storedDataSTR);
      return Array.isArray(storedData) ? storedData : [];
    } catch (e) {
         console.error("Failed to parse storedData:", e);
      return [];
    }
  } else {
    return [];
  }
};


const setStoredData = (id) => {
  const storedData = getStoredData();
  const intId = parseInt(id);

  if (storedData.includes(intId)) {
    toast.error("Appointments Already Added");
    return false; 
  } else {
    storedData.push(intId);
    localStorage.setItem('storedData', JSON.stringify(storedData));
    toast.success("Appointment Scheduled Successfully");
    return true; 
  }
};


const removeFromLocalStorage = (id) => {
  const existing = getStoredData();
  const updatedIds = existing.filter((item) => parseInt(item) !== parseInt(id));
  localStorage.setItem("storedData", JSON.stringify(updatedIds));
};

export { setStoredData, getStoredData, removeFromLocalStorage };
