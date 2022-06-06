const if_lambda = b => {
  return x => {
    return y => {
      return b(x)(y);
    };
  };
}

const true_lambda  = x => {
  return y => {
    return x;
  };
};

const false_lambda = x => {
  return  y => {
    return y;
  };
};

console.log("if True  a b =", if_lambda(true_lambda)("a")("b"));
console.log("if False a b =", if_lambda(false_lambda)("a")("b"));
