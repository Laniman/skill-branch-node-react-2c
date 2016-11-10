const protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

export default (urlUsername) => {
  const withoutProtocol = protocolre.exec(urlUsername)[3];
  const hasSlash = /\//.test(withoutProtocol);

  return (
    hasSlash ?
    withoutProtocol.split('/')[1] :
    withoutProtocol)
    .replace(/@/g, '');
};
