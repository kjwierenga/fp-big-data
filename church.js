let cif = (b) => {
  return (x) => {
    return (y) => {
      return b(x)(y);
    };
  };
}

let ctrue  = (x) => {
  return (y) => {
    return x;
  };
};

let cfalse = (x) => {
  return (y) => {
    return y;
  };
};

console.log("if True  a b =", cif(ctrue)("a")("b"));
console.log("if False a b =", cif(cfalse)("a")("b"));
