import { notifications } from "@mantine/notifications";

export default function showToast() {
  notifications.show({
    id: "load-data",
    title: "Loading data...",
    message: "Please wait while we load the data.",
    loading: true,
    autoClose: false,
    //disallowClose: true,
  });

  setTimeout(() => {
    notifications.update({
      id: "load-data",
      title: "Data loaded",
      message: "The data has been successfully loaded.",
      loading: false,
      autoClose: 2000,
      //disallowClose: false,
    });
  }, 2000);
}
