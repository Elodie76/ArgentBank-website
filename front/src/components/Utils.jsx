
// Fonction pour vérifier si une variable est vide

export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
        );
};

export const isValidName = (name) => {
    const regex = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    return regex.test(name);
};


export const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};

export const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/; 
    return regex.test(password);
};