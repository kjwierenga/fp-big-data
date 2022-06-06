
if_lambda = -> (b) { -> (x) { -> (y) { b.call(x).call(y) } } }

true_lambda  = -> (x) { -> (y) { x } }
false_lambda = -> (x) { -> (y) { y } }

puts "if True  a b = #{if_lambda.call(true_lambda).call("a").call("b")}"  # a
puts "if False a b = #{if_lambda.call(false_lambda).call("a").call("b")}" # b
