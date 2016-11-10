const protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

export default (urlUsername) => {
  const incorrectValue = 'Invalid username';
  const withoutProtocol = protocolre.exec(urlUsername)[3];
  const hasSlash = /\//.test(withoutProtocol);

  const normalizedUsername = (
    hasSlash ?
    withoutProtocol.split('/')[1] :
    withoutProtocol)
    .replace(/@/g, '')
    .split('?')[0];
  
  return normalizedUsername ? 
    `@${normalizedUsername}` :
    incorrectValue;
};
