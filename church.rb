
cif = -> (b) { -> (x) { -> (y) { b.call(x).call(y) } } }

ctrue  = -> (x) { -> (y) { x } }
cfalse = -> (x) { -> (y) { y } }

puts "if True  a b = #{cif.call(ctrue).call("a").call("b")}"  # a
puts "if False a b = #{cif.call(cfalse).call("a").call("b")}" # b
