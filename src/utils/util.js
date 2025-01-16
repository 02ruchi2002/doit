import { customAlphabet } from 'nanoid';

export const generateUniqueString = () => {
    const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 50); 
    return nanoid();
};