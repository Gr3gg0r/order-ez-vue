export const getCategories = async () => {
  const apiKey = process.env.VUE_APP_API_KEY;
  const apiHost = process.env.VUE_APP_API_ENDPOINT;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${apiHost}/distributor/categories`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
