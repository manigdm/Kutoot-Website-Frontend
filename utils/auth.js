const auth = () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('auth');
      return data ? JSON.parse(data) : null;
    }
    return null;
  };
  
  export default auth;