const auth = () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('userData');
      return data ? JSON.parse(data) : null;
    }
    return null;
  };
  
  export default auth;