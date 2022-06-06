
if_lambda = -> (b) { -> (x) { -> (y) { b.(x).(y) } } }

true_lambda  = -> (x) { -> (y) { x } }
false_lambda = -> (x) { -> (y) { y } }

puts "if True  a b = #{if_lambda.(true_lambda).("a").("b")}"  # a
puts "if False a b = #{if_lambda.(false_lambda).("a").("b")}" # b
