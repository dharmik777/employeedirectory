export const getEmployees = async() => {
    const result = await fetch("http://localhost:8080/getData") 
    return result.json()
};