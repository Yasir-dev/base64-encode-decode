// buttons
const encodeButton = getElement('#buttonEncode');
const decodeButton = getElement('#buttonDecode');

// click event handlers
encodeButton.addEventListener('click', event => {
    executeByType('encode');
});

decodeButton.addEventListener('click', event => {
    executeByType('decode');
});

/**
 * Execute encoding/decoding by type
 * @param type
 */
const executeByType = type => {
    const encodeInput = getElement('#textareaEncode');
    const decodeInput = getElement('#textareaDecode');
    try {
        decodeInput.value = type === 'encode' ? encodeBase64(encodeInput.value) : decodeBase64(encodeInput.value);
    } catch (e) {
        decodeInput.value = 'Invalid input';
        logError(e.message);
    }
};