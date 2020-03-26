/**
 * Encode Base64
 * @param string
 * @return {string}
 */
const encodeBase64 = string => btoa(string);

/**
 * Decode Base64
 * @param string
 * @return {string}
 */
const decodeBase64 = string => atob(string);

/**
 * Return element captured by the selector
 * @param selector
 * @return {Element}
 */
const getElement = selector => document.querySelector(selector);

/**
 * Log error message to console
 * @param {string} message
 */
const logError = message => console.log(`%c${message}`, "background: red; color: white; font-size: x-large");