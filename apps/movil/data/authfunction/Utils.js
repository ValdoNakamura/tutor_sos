/** Validar email */
export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/** Convertir timestamp a fecha legible */
export const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
};
