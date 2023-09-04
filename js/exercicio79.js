function solution(address) {
    const atIndex = address.lastIndexOf('@');
    const domain = address.slice(atIndex + 1);
    return domain;
  }
  