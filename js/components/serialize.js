export function serializeArray(array) {
  const uint8Array = new Uint8Array(array);
  const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
  return base64String;
}

export function deserializeString(serializedString) {
  const decodedString = atob(serializedString);
  const uint8Array = new Uint8Array(decodedString.length);
  for (let i = 0; i < decodedString.length; i++) {
    uint8Array[i] = decodedString.charCodeAt(i);
  }
  return Array.from(uint8Array);
}
