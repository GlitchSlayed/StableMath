The derivative is defined by the limit $$f'(x)=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}.$$ This quotient starts as an average rate of change over a tiny interval and becomes an instantaneous rate of change as the interval width shrinks toward zero.

The power rule says $$\\frac{d}{dx}x^n = nx^{n-1}.$$ More generally, if $f(x)=ax^n$, then $f'(x)=anx^{n-1}$. This rule underlies a huge fraction of early calculus computations because polynomial models appear everywhere.

Products and quotients require their own structure-aware rules: $$\\frac{d}{dx}[u(x)v(x)] = u'(x)v(x)+u(x)v'(x),$$ and $$\\frac{d}{dx}\\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^2}.$$ These formulas remind us that differentiation interacts with algebra in patterned but nontrivial ways.

The chain rule handles composition: $$\\frac{d}{dx}f(g(x)) = f'(g(x))g'(x).$$ Conceptually, it multiplies the rate of change of the outer response by the rate of change of the inner input. This is the rule that makes nested engineering formulas and backpropagation-style ML calculations possible.

A local linear approximation near $x=a$ is $$f(x) \\approx f(a)+f'(a)(x-a).$$ This formula is one reason derivatives matter so much. It turns a complicated curve into a line that is often good enough for estimation over a small range.
