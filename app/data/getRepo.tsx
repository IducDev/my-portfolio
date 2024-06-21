export  async function getDataFromAPI() {
    try {
        // Realiza la solicitud fetch
        const response = await fetch(`https://api.github.com/users/iducdev/repos`);
        // Verifica si la respuesta es exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        // Convierte la respuesta a JSON
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Opcionalmente, puedes decidir qué hacer con el error aquí
    }
}