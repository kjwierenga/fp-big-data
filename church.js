let if_lambda = b => {
  return x => {
    return y => {
      return b(x)(y);
    };
  };
}

let true_lambda  = x => {
  return y => {
    return x;
  };
};

let false_lambda = x => {
  return  y => {
    return y;
  };
};

console.log("if True  a b =", if_lambda(true_lambda)("a")("b"));
console.log("if False a b =", if_lambda(false_lambda)("a")("b"));
