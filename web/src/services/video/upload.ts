export default async function uploadVideo(
  file: File,
  course_name: string,
  module_name: string,
  video_name: string
) {
  const formData = new FormData();
  formData.append("video", file);
  formData.append("course_name", course_name);
  formData.append("module_name", module_name);
  formData.append("video_name", video_name);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const jwt_token = window.sessionStorage.getItem("jwt_token");
  if (!jwt_token) {
    throw new Error("Token not found");
  }

  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt_token}`,
    },
    body: formData,
  });

  const result = await res.json();
  console.log("Upload response:", result);
}
