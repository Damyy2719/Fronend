const jwt_decode = (token) => {
  return {
    username: 'admin',
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira en una hora
  };
};

export { jwt_decode };
